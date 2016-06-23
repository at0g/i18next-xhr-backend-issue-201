import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import en from 'json!../locales/en/translation.json';
import de from 'file?name=[path][name].[ext]!../locales/de/translation.json';

i18next
	.use(XHR)
	.init({
			whitelist: ['en', 'de'],
			fallbackLng: 'en',

			backend: {
				loadPath: '/locales/{{lng}}/{{ns}}.json'
			},

			// Preload the "en" resource bundle
			resources: { en }
		},
		(err) => {
			if (err) {
				throw err;
			}
			console.log('i18next initialized');
			console.log('waiting 200ms before loading de language bundle');
			setTimeout(() => {
				i18next.loadLanguages('de', (err) => {
					if (err) {
						throw err;
					}
					console.log('de locale loaded');
					console.log(i18next.store.data);
				});
			}, 200);
		});

export default i18next;
