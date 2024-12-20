export const startRender = () => {
    const startDomElement = document.getElementById('start');
    startDomElement.innerHTML = `
            <div class="background_picture">
            <div
                class="background_picture__logo"
                data-i18n="Ożywiamy Świat Twoich Pomysłów"
            ></div>
            <div class="background_picture__typing_word">
                <span class="background_picture__typing_word__text"></span>
            </div>
            <div class="arrow">
                
                    <svg
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L15.0711 3.34315C15.4616 2.95262 15.4616 2.31946 15.0711 1.92893C14.6805 1.53841 14.0474 1.53841 13.6569 1.92893L8 7.58579L2.34315 1.92893C1.95262 1.53841 1.31946 1.53841 0.928932 1.92893C0.538408 2.31946 0.538408 2.95262 0.928932 3.34315L7.29289 9.70711ZM7 0L7 9H9V0L7 0Z"
                            fill="black"
                        />
                    </svg>
              
            </div>
            <a
                href="https://pixabay.com/pl/vectors/g%C3%B3ry-krajobraz-niebo-las-4823516/"
                target="_blank"
                ><div class="credits">CREDITS</div>
            </a>
            </div>

    `;
    const arrowLink = startDomElement.querySelector('.arrow');
    arrowLink.addEventListener('click', () => {
        const start = document.getElementById('start');
        const portfolio = document.getElementById('portfolio');
        start.style.display = 'none';
        portfolio.style.display = 'flex';
    });
};
