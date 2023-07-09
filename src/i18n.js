import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_fr from "./translation/fr/fr.json";
import global_en from "./translation/en/en.json";

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: global_en,
			},
			fr: {
				translation: global_fr,
			},
		},
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;