// Window Onload. Een laad pagina die alle elementen laat laden dankzij een gif (of iets anders?)
// Je moet wel alles invullen anders kan je niet klikken op "Sign In" en krijg je een alert "alles invullen aub"
// Nog niet zeker of we iets zullen doen voor de Wachtwoord Vergeten.
// Als je op "Sign In" klikt dan Admin Page 

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
