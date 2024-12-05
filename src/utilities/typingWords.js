import Typed from 'typed.js';
import i18next from 'i18next';

let typedInstance = null;

export const initTyped = () => {
    if (typedInstance) {
        typedInstance.destroy();
    }
    typedInstance = new Typed('.background_picture__typing_word__text', {
        strings: [
            i18next.t('Animacje reklamowe'),
            i18next.t('Animacje edukacyjne'),
            i18next.t('Wsparcie produkcji filmów animowanych'),
            i18next.t('Animacje na strony internetowe'),
        ],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
    });
};
