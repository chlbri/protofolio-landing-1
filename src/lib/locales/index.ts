import create from 'zustand';
import en from './en';
import fr from './fr';
import { State } from './types';

const langs: Record<string, any> = { en, fr };
const byString = function (o: any, s: string) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

// function useLang() {
//   const [lang, changeLanguage] = useState('en');

//   useEffect(() => {
//     internationalization.change(lang);
//   }, [lang]);

//   const get = useCallback(
//     (key: string) => internationalization.get(key),
//     [lang],
//   );

//   return { changeLanguage, get } as const;
// }

type Store = {
  lang: string;
  langs: Record<string, any>;
  get(str: string): any;
  changeLanguage(str: string): void;
  init(str: Record<string, any>): void;
  state: State;
};

const useLang = create<Store>((set, gette) => ({
  lang: 'en',
  state: 'idle',
  langs,
  get: (key: string) => {
    return byString(gette().langs[gette().lang], key);
  },
  changeLanguage: (lang: string) => set({ lang }),
  init: (langs: Record<string, any>) => set({ langs }),
}));

export default useLang;
