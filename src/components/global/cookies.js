import i18next from 'i18next';
import { translateFunction } from '../../utilities/i18n';
export const cookiesRender = () => {
    const cookiesDomElement = document.getElementById('cookieConsent');
    cookiesDomElement.innerHTML = `
           
                    <div id="closeCookieConsent">x</div>
                    <span
                        data-i18n="Ta strona używa plików cookies w celu poprawy doświadczenia użytkownika."
         
                        ></span
                    >
                    
                        <a class='polityka' data-i18n="Dowiedz się więcej"
                            ></a
                        >.
                    
                    <button id="acceptCookie" data-i18n="Akceptuję">Akceptuję</button>
            
    `;
    const close = cookiesDomElement.querySelector('#closeCookieConsent');
    const accept = cookiesDomElement.querySelector('#acceptCookie');
    const privacyPolicy = cookiesDomElement.querySelector('.polityka');
    close.addEventListener('click', () => {
        cookiesDomElement.style.display = 'none';
    });
    accept.addEventListener('click', () => {
        cookiesDomElement.style.display = 'none';
    });

    privacyPolicy.addEventListener('click', () => {
        
        const backdrop = document.querySelector('.popup-backdrop');
        backdrop.style.display = 'flex';
        const popupContainer = document.querySelector('.popups');
        const popupMessage = document.createElement('div');
        popupMessage.className = 'popup-message';

        popupMessage.innerHTML = `
            <h2 class="cennik__header" data-i18n="Polityka prywatnosci"></h2>
            <button id="close-popup"  data-i18n="zamknij"></button>
        `;
        translateFunction();
        popupContainer.appendChild(popupMessage);
        document.getElementById('close-popup').addEventListener('click', () => {
            popupContainer.innerHTML = '';
        });
    });
};
