export const portfolioRender = () => {
    const portfolioDomElement = document.getElementById('portfolio');
    portfolioDomElement.innerHTML = `
            <div class="graphic_types">
            <div class="graphic_types__3d graphic_types__split">
                <div class="graphic_types__3d__photo">
                    <p class="graphic_types__3d__photo__tittle" data-i18n="Animacje 3d">
                        Animacje 3d
                    </p>
                </div>
            </div>
            <div class="graphic_types__2d graphic_types__split">
            <div class="graphic_types__2d__photo">
                <p class="graphic_types__2d__photo__tittle" data-i18n="Animacje 2d">
                    Animacje 2d
                </p>
            </div>
            </div>
            </div>
    `;
    const portfolio2d = portfolioDomElement.querySelector('.graphic_types__3d__photo');
    const portfolio3d = portfolioDomElement.querySelector('.graphic_types__2d__photo');
    
    
    portfolio2d.addEventListener('click',()=>{
        alert('brak, sprawdź później');
    });
    portfolio3d.addEventListener('click',()=>{
        alert('brak, sprawdź później');
    });
};
