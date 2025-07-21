// توليد رقم عشوائي بين 1 و100
let randomNum = document.getElementsByClassName('random-num')[0];

const randomNumber = Math.floor(Math.random() * 100) + 1;
randomNum.innerHTML = randomNumber;

console.log("الرقم العشوائي هو:", randomNumber);
