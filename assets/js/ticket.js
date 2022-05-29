// Window Onload. Een laad pagina die alle elementen laat laden dankzij een gif (of iets anders?)
// Indien het persoon minder dan 18 jaar is dan komt er een error message "Alleen volwassen persoon mag ticket kopen".
// Alles invullen anders krijg je een allert "Alles invullen aub"
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}
