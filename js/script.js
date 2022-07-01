import Scrollsuave from './modules/scroll-suave.js';
import initScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new Scrollsuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initScroll();
initAccordion();
initTabNav();
initModal();
initToolTip();
initDropDown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
