// Window Onload. Een laad pagina die alle elementen laat laden dankzij een gif (of iets anders?)






// COUNT API
function websiteVisits(response) {
    document.querySelector("#visits").innerHTML = response.value;
}

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
