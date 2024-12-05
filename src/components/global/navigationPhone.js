export const navigationRender = () => {
    const navigationPhoneDomElement = document.getElementById('nav_phone');
    navigationPhoneDomElement.innerHTML = `
    <ul class="nav_phone__items">
                <li class="nav_phone__items__close">
                    <h2 class="nav_phone__items__close__header">x</h2>
                    <p class="nav_phone__items__close__paragraph" data-i18n="zamknij"></p>
                </li>
                <li class="nav_phone__item nav_phone__start"  data-section="start">
                    <a data-i18n="Start"></a>
                </li>
                <li class="nav_phone__item nav_phone__portfolio" data-section="graphic">
                    <a data-i18n="Portfolio"></a>
                </li>
                <li class="nav_phone__item nav_phone__onas" data-section="onas">
                    <a data-i18n="O nas"></a>
                </li>
                <li class="nav_phone__item nav_phone__cennik" data-section="cennik">
                    <a  data-i18n="Cennik"></a>
                </li>
                <li class="nav_phone__item nav_phone__kontakt" data-section="kontakt">
                    <a data-i18n="Kontakt"></a>
                </li>
                   <ul class="nav_main__items">
    </ul>

    `;
    const closeButton = navigationPhoneDomElement.querySelector('.nav_phone__items__close');
    const startButton = navigationPhoneDomElement.querySelector('.nav_phone__start');
    const portfolioButton = navigationPhoneDomElement.querySelector('.nav_phone__portfolio');
    const onasButton = navigationPhoneDomElement.querySelector('.nav_phone__onas');
    const cennikButton = navigationPhoneDomElement.querySelector('.nav_phone__cennik');
    const kontaktButton = navigationPhoneDomElement.querySelector('.nav_phone__kontakt');
    const start = document.getElementById('start');
    const portfolio = document.getElementById('portfolio');
    const onas = document.getElementById('onas');
    const cennik = document.getElementById('cennik');
    const kontakt = document.getElementById('kontakt');
    const navPhone = document.querySelector('.nav_phone');
    closeButton.addEventListener('click', () => {
        navPhone.style.display = 'none';
    });
    startButton.addEventListener('click', () => {
        start.style.display = 'flex';
        portfolio.style.display = 'none';
        onas.style.display = 'none';
        cennik.style.display = 'none';
        kontakt.style.display = 'none';
        navPhone.style.display = 'none';
    });
    portfolioButton.addEventListener('click', () => {
        start.style.display = 'none';
        portfolio.style.display = 'flex';
        onas.style.display = 'none';
        cennik.style.display = 'none';
        kontakt.style.display = 'none';
        navPhone.style.display = 'none';
    });
    onasButton.addEventListener('click', () => {
        start.style.display = 'none';
        portfolio.style.display = 'none';
        onas.style.display = 'flex';
        cennik.style.display = 'none';
        kontakt.style.display = 'none';
        navPhone.style.display = 'none';
    });
    cennikButton.addEventListener('click', () => {
        start.style.display = 'none';
        portfolio.style.display = 'none';
        onas.style.display = 'none';
        cennik.style.display = 'flex';
        kontakt.style.display = 'none';
        navPhone.style.display = 'none';
    });
    kontaktButton.addEventListener('click', () => {
        start.style.display = 'none';
        portfolio.style.display = 'none';
        onas.style.display = 'none';
        cennik.style.display = 'none';
        kontakt.style.display = 'flex';
        navPhone.style.display = 'none';
    });
};
