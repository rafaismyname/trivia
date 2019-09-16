import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

import en from './en.json'; // To add another language import its json here and add it to i18n.translations below

i18n.locale = RNLocalize.language;
i18n.fallbacks = true;
i18n.translations = { en }; // Add any other languages here

i18n.onLocaleUpdate = ({ language }) => {
  i18n.locale = language || RNLocalize.language;
};

export default i18n;
