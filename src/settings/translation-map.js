export const LANGUAGES = {
    en: [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' },
        { value: 'it', label: 'Italian' }
    ],
    es: [
        { value: 'en', label: 'Inglés' },
        { value: 'es', label: 'Español' },
        { value: 'fr', label: 'Francés' },
        { value: 'it', label: 'Italiano' }
    ],
    fr: [
        { value: 'en', label: 'Anglais' },
        { value: 'es', label: 'Espagnol' },
        { value: 'fr', label: 'Français' },
        { value: 'it', label: 'Italien' }
    ],
    it: [
        { value: 'en', label: 'Inglese' },
        { value: 'es', label: 'Spagnolo' },
        { value: 'fr', label: 'Francese' },
        { value: 'it', label: 'Italiano' }
    ]
};

export const TEXT_MAP = {
    en: {
        about: {
            dvp: 'About DVP',
            cod: 'About COD'
        },
        heading: 'Settings',
        label: 'Language Used',
        button: 'Update',
        noStorage: 'Local storage is not supported by this browser.'
    },
    es: {
        about: {
            dvp: 'Acerca de DVP',
            cod: 'Acerca de COD'
        },
        heading: 'Ajustes',
        label: 'Idioma Usado',
        button: 'Actualizar',
        noStorage: 'El almacenamiento local no es compatible con este navegador.'
    },
    fr: {
        about: {
            dvp: 'À propos DVP',
            cod: 'À propos COD'
        },
        heading: 'Paramètres',
        label: 'Langue Utilisée',
        button: 'Mettre à Jour',
        noStorage: 'Le stockage local n\'est pas pris en charge par ce navigateur.'
    },
    it: {
        about: {
            dvp: 'Di DVP',
            cod: 'Di COD'
        },
        heading: 'Impostazioni',
        label: 'Lingua Utilizzata',
        button: 'Aggiornare',
        noStorage: 'L\'archiviazone locale non è supportate da questo browser.'
    }
};

export const LANGUAGE_INFO = {
    LANGUAGES,
    TEXT_MAP
};

export default LANGUAGE_INFO;
