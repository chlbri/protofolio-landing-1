import { readJsonFileNamesSync } from '../../src/lib/locales/functions';

describe('useLang', () => {
  it('Title', () => {
    console.log('Res', '=>', readJsonFileNamesSync('src', 'lib', 'locales', 'en'));
    expect(true).toBe(true);
  });
});
