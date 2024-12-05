import i18next from 'i18next';
import translations from '../assets/translations.json';
import { initTyped } from './typingWords';


export const translateFunction = async () => {
    const en = translations.en;
    const pl = translations.pl;
    await i18next.init({
        lng: 'pl',
        debug: true,
        resources: {
            en: {
                translation: en,
            },
            pl: {
                translation: pl,
            },
        },
    });

    const updateTranslations = () => {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            el.innerText = i18next.t(key);
        });
    };
    updateTranslations();
    document.getElementById('change-to-pl').addEventListener('click', () => {
        i18next.changeLanguage('pl');
        updateTranslations();
        initTyped();
    });
    
    document.getElementById('change-to-en').addEventListener('click', () => {
        i18next.changeLanguage('en');
        updateTranslations();
        initTyped();
    });
};


