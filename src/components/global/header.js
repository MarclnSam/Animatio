export const headerRender = () => {
    const headerDomElement = document.getElementById('nav_main');
    headerDomElement.innerHTML = `
    <div class="logo">
        <svg
            width="176"
            height="117"
            viewBox="0 0 176 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M58.304 70L57.8 67.336H54.008L53.504 70H50.24L53.48 53.2H58.448L61.52 70H58.304ZM55.856 56.32L54.92 61.912L54.392 64.768H57.392L56.84 61.912L55.904 56.32H55.856ZM70.4056 70L65.9176 60.712L65.7976 60.76L65.9416 63.592V70H62.9176V53.2H65.3416L69.7576 62.848L69.8776 62.8L69.6136 59.848V53.2H72.6376V70H70.4056ZM74.9411 70V53.2H78.2291V70H74.9411ZM86.6626 62.32H86.5666H86.6626L87.9346 57.064L88.9666 53.2H91.9666L93.0466 70H89.9026L89.4466 60.832H89.3266L87.5986 67.6H85.6306L83.9026 60.832H83.7826L83.3266 70H80.1826L81.2626 53.2H84.2626L85.2946 57.064L86.5666 62.32H86.6626ZM102.132 70L101.628 67.336H97.8361L97.3321 70H94.0681L97.3081 53.2H102.276L105.348 70H102.132ZM99.6841 56.32L98.7481 61.912L98.2201 64.768H101.22L100.668 61.912L99.7321 56.32H99.6841ZM108.005 56.08H104.381V53.2H114.893V56.08H111.269V70H108.005V56.08ZM116.285 70V53.2H119.573V70H116.285ZM129.71 53.2C130.83 54.112 131.662 55.336 132.206 56.872C132.75 58.408 133.022 59.992 133.022 61.624C133.022 63.24 132.758 64.776 132.23 66.232C131.702 67.688 130.862 68.944 129.71 70H124.766C123.614 68.944 122.774 67.688 122.246 66.232C121.718 64.776 121.454 63.24 121.454 61.624C121.454 59.992 121.726 58.408 122.27 56.872C122.814 55.336 123.646 54.112 124.766 53.2H129.71ZM126.374 67.216H128.102C128.502 66.752 128.838 66 129.11 64.96C129.398 63.904 129.542 62.792 129.542 61.624C129.542 60.456 129.406 59.36 129.134 58.336C128.862 57.296 128.526 56.544 128.126 56.08H126.374C125.974 56.544 125.63 57.296 125.342 58.336C125.07 59.36 124.934 60.456 124.934 61.624C124.934 62.792 125.07 63.904 125.342 64.96C125.63 66 125.974 66.752 126.374 67.216Z"
                fill="#333030"
            />
            <line x1="49" y1="50.5" x2="86" y2="50.5" stroke="#333030" />
            <line x1="49.5" y1="51" x2="49.5" y2="56" stroke="#333030" />
            <line x1="99" y1="72.5" x2="136" y2="72.5" stroke="#333030" />
            <path d="M135.5 73V66" stroke="#333030" />
        </svg>
    </div>

    <ul class="nav_main__items">
        <li class="nav_main_item nav_main_start " data-section="start" data-i18n="Start"></li>
        <li class="nav_main_item nav_main_portfolio" data-section="graphic" data-i18n="Portfolio"></li>
        <li class="nav_main_item nav_main_onas" data-section="onas" data-i18n="O nas"></li>
        <li class="nav_main_item nav_main_cennik" data-section="cennik" data-i18n="Cennik"></li>
        <li class="nav_main_item nav_main_kontakt" data-section="kontakt" data-i18n="Kontakt"></li>
    </ul>

    <div class="languages_nav">
        <button class="button_languages" id="change-to-en" data-lang="en">EN</button>
        <button class="button_languages" id="change-to-pl" data-lang="pl">PL</button>
    </div>

    <svg class="hamburger_menu_button" width="40" height="40" viewBox="0 0 100 80" fill="black">
        <rect y="20" width="80" height="8"></rect>
        <rect y="35" width="80" height="8"></rect>
        <rect y="50" width="80" height="8"></rect>
    </svg>
    `;
    const hamburgerMenu = headerDomElement.querySelector('.hamburger_menu_button');
    const navStart = headerDomElement.querySelector('.nav_main_start');
    const navPortfolio = headerDomElement.querySelector('.nav_main_portfolio');
    const navOnas = headerDomElement.querySelector('.nav_main_onas');
    const navCennik = headerDomElement.querySelector('.nav_main_cennik');
    const navKontakt = headerDomElement.querySelector('.nav_main_kontakt');
    const start = document.getElementById('start');
    const portfolio = document.getElementById('portfolio');
    const onas = document.getElementById('onas');
    const cennik = document.getElementById('cennik');
    const kontakt = document.getElementById('kontakt');

    hamburgerMenu.addEventListener('click', () => {
        const navPhone = document.querySelector('.nav_phone');
        navPhone.style.display = 'flex';
    });
    navStart.addEventListener('click', () => {
        start.style.display = 'flex';
        portfolio.style.display = 'none';
        onas.style.display = 'none';
        cennik.style.display = 'none';
        kontakt.style.display = 'none';
    });
    navPortfolio.addEventListener('click', () => {
        start.style.display = 'none';
        portfolio.style.display = 'flex';
        onas.style.display = 'none';
        cennik.style.display = 'none';
        kontakt.style.display = 'none';
    });
    navOnas.addEventListener('click', () => {
        onas.style.display = 'flex';
        portfolio.style.display = 'none';
        start.style.display = 'none';
        cennik.style.display = 'none';
        kontakt.style.display = 'none';
    });
    navCennik.addEventListener('click', () => {
        cennik.style.display = 'flex';
        onas.style.display = 'none';
        portfolio.style.display = 'none';
        start.style.display = 'none';
        kontakt.style.display = 'none';
    });
    navKontakt.addEventListener('click', () => {
        kontakt.style.display = 'flex';
        cennik.style.display = 'none';
        onas.style.display = 'none';
        portfolio.style.display = 'none';
        start.style.display = 'none';
    });
};
