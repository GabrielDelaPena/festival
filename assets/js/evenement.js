// Window Onload. Een laad pagina die alle elementen laat laden dankzij een gif (of iets anders?)

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/04/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 0)
}())

// BUTTON VOOR DAYS

const day1Button = document.getElementById('btn-day1');
const day2Button = document.getElementById('btn-day2');
const day3Button = document.getElementById('btn-day3');

const eventDay1 = document.getElementById('event-day1');
const eventDay2 = document.getElementById('event-day2');
const eventDay3 = document.getElementById('event-day3');

const day = document.getElementById('day');
let dayText = "Day 1";

day.innerHTML = dayText;



function showContainer(container) {
    // this function will change the display to block  
    container.style.display = "block";
  }

  function hideContainer(container) {
    // this function will change the display to none 
    container.style.display = "none";
  }

day1Button.addEventListener('click', (event) => {
    showContainer(eventDay1);
    hideContainer(eventDay2);
    hideContainer(eventDay3);
    day.innerHTML = "Day 1"
});

day2Button.addEventListener('click', (event) => {
    showContainer(eventDay2);
    hideContainer(eventDay1);
    hideContainer(eventDay3);
    day.innerHTML = "Day 2"
});

day3Button.addEventListener('click', (event) => {
    showContainer(eventDay3);
    hideContainer(eventDay2);
    hideContainer(eventDay1);
    day.innerHTML = "Day 3"
});


/* NAV */

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
