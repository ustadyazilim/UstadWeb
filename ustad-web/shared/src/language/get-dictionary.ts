/** Type Imports */
import type { Locale } from '../language/i18n-config';

const dictionaries = {
  'en-US': () =>
    import('./dictionary/en-US.json').then((module) => module.default),
  'tr-EN': () =>
    import('./dictionary/tr-EN.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries['en-US'];
