const button1 = document.getElementById(`btn1`)
const button2 = document.getElementById(`btn2`)
const label1 = document.getElementById(`l1`)
const label2 = document.getElementById(`l2`)
const winner = document.getElementById(`winner`)

const min = 1;
const max = 6;

let randomnum1;
let randomnum2;
let randomnum3;
let winum;

button1.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + 1;
    label1.textContent = randomnum1; 
}

button2.onclick = function(){
    randomnum2 = Math.floor(Math.random() * max) + 1;
    label2.textContent = randomnum2; 
}


