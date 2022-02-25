import fs from 'fs';
import p from 'path';
import { cwd } from 'process';
import { promisify } from 'util';

export function concat(...jsons: Record<string, any>[]) {
  return jsons.reduce((prev, next) => {
    prev = { ...prev, ...next };
    return prev;
  });
}

export function filterJson(path: fs.Dirent) {
  return path.isFile() && p.extname(path.name) === '.json';
}

/**
 * Synchronous function
 * @param paths from the current dir resolver
 * @returns string[]
 */
export function readJsonFileNamesSync(...paths: string[]) {
  const _path = p.resolve(cwd(), ...paths);

  const fileObjs = fs.readdirSync(_path, { withFileTypes: true });
  return fileObjs
    .filter(filterJson)
    .map(file => p.resolve(_path, file.name));
}
/**
 * Synchronous function
 * @param paths from the current dir resolver
 * @returns string[]
 */
const files: string[] = [];
export function readJsonDirFileNamesSync(
  files: string[],
  ...paths: string[]
): any {
  const _path = p.resolve(cwd(), ...paths);

  const fileObjs = fs.readdirSync(_path, { withFileTypes: true });
  fileObjs.forEach(file => {
    if (file.isDirectory()) {
      readJsonDirFileNamesSync(files, ...paths, file.name);
    }
    if (filterJson(file))
      files.push(p.resolve(_path.replace(cwd(), ''), file.name));
  });

  return files;
}

JSON.stringify(readJsonDirFileNamesSync(files, 'src'), null, 2); //?

/**
 * Asynchronous function
 * @param paths from the current dir resolver
 * @returns string[]
 */
export async function readJsonFileNamesAsync(...paths: string[]) {
  const _path = p.resolve(cwd(), ...paths);
  const _readdir = promisify(fs.readdir);

  const dir = await _readdir(_path, { withFileTypes: true });
  return dir.filter(filterJson).map(file => p.resolve(_path, file.name));
}

export function readJsonFileSync(json: string) {
  const fileName = p.basename(json, '.json');
  return JSON.parse(
    `{"${fileName}":${fs.readFileSync(json).toLocaleString()}}`,
  );
}

export async function readJsonFileAsync(json: string) {
  const _readFile = promisify(fs.readFile);

  const value = await _readFile(json);
  return value.toLocaleString();
}

const filesNames = readJsonFileNamesSync('src', 'lib', 'locales', 'en');
filesNames; //?
const readJsons = filesNames.map(readJsonFileSync);
// JSON.stringify(readJsons, null, 2);
const concatJson = concat(...readJsons);
concatJson; //?
