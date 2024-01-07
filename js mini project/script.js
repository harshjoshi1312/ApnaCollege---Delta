let gameseq = [];
let userSeq = [];

let started=false;
let level=0;

let btns = ["yellow","red","purple","green"];


let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("game started");
        started = true;
    }
    levelUp();
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
    btn.classList.remove("flash");
    },1000);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText='Level ${level}';


    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = documnet.querySelector('.${randColor}');
    gameseq.push(randColor);
        btnFlash(randBtn);
}

function checkAns(idx) {
    console.log("curr level : ",level);

    if(userSeq[idx] === gameseq[idx]) {
        if( userSeq.length == gameseq.length){
            setTimeout(levelUp(), 1000);
        }
    } else {
        h2.innerText = 'Game Over! Press any key to start.';
        resizeTo();
    }
}



function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userSeq = [];
    level = 0;
}