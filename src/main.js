import './style.css';
import { headerRender } from './components/global/header.js';
import { navigationRender } from './components/global/navigationPhone.js';
import { startRender } from './pages/start.js';
import { portfolioRender } from './pages/portfolio.js';
import { onasRender } from './pages/onas.js';
import { translateFunction } from './utilities/i18n.js';
import { initTyped } from './utilities/typingWords.js';
import { cennikRender } from './pages/cennik.js';
import { kontaktRender } from './pages/kontakt.js';
import { cookiesRender } from './components/global/cookies.js';

headerRender();
navigationRender();
startRender();
portfolioRender();
onasRender();
cennikRender();
kontaktRender();
cookiesRender();


translateFunction();
document.addEventListener('DOMContentLoaded', () => {
    initTyped();
});
