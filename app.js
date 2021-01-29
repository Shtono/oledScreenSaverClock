const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const hoursUI = document.querySelector('.hours');
const minutesUI = document.querySelector('.minutes');
const secondsUI = document.querySelector('.seconds');

function getAndUpdateTime() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  hoursUI.innerHTML = hours < 10 ? `0${hours}:` : `${hours}:`;
  minutesUI.innerText = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  secondsUI.innerText = seconds < 10 ? `0${seconds}` : `${seconds}`;

  setTimeout(() => {
    getAndUpdateTime();
  })
}

function changeColor() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);

  container.style.color = `rgba(${red}, ${green}, ${blue}, 1)`;

  setTimeout(() => {
    changeColor();
  }, 2000)
}

function flame() {
  let shadow = Math.round(Math.random() * 20);

  container.style.textShadow = ` 0 -1px ${shadow}px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00`

  setTimeout(() => {
    flame();
  }, 1000);
}
console.log(container.offsetWidth);
console.log(window.innerWidth);
function changePosition() {
  // const top = Math.round(Math.random() * 80);
  // const left = Math.round(Math.random() * 65);

  let top = Math.round(Math.random() * window.innerHeight);
  let left = Math.round(Math.random() * window.innerWidth);

  if (left > window.innerWidth - 720) {
    left = window.innerWidth - 720;
  }
  if (top > window.innerHeight - 230) {
    top = window.innerHeight - 230;
  }

  container.style.top = `${top}px`;
  container.style.left = `${left}px`;

  // container.style.top = `${top}%`;
  // container.style.left = `${left}%`;

  setTimeout(() => {
    changePosition();
  }, 30000)
}

getAndUpdateTime();
// changeColor();
flame();
changePosition();



// console.log(hours);
// console.log(minutes);



let random = Math.round(Math.random() * 255);











// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');

// const hours = new Date().getHours();
// const minutes = new Date().getMinutes();
// const seconds = new Date().getSeconds();


// console.log(hours);
// console.log(minutes);

// let red = 0;
// let green = 0;
// let blue = 0;

// let random = Math.round(Math.random() * 255);

// setTimeout(() => {
//   container.style.color = 
// }, 1000);

// btn.addEventListener('click', () => {
//   console.log(seconds);
// });