const W=document.getElementById("w");
const A=document.getElementById("a");
const S=document.getElementById("s");
const J=document.getElementById("j");
const K=document.getElementById("k");
const D=document.getElementById("d");
const L=document.getElementById("l");

W.addEventListener('click',()=>{
    var aud= new Audio('sounds/crash.mp3');
    aud.play();
})
A.addEventListener('click',()=>{
    var aud= new Audio('sounds/kick-bass.mp3');
    aud.play();
})
S.addEventListener('click',()=>{
    var aud= new Audio('sounds/snare.mp3');
    aud.play();
})
J.addEventListener('click',()=>{
    var aud= new Audio('sounds/tom-1.mp3');
    aud.play();
})
K.addEventListener('click',()=>{
    var aud= new Audio('sounds/tom-2.mp3');
    aud.play();
})
D.addEventListener('click',()=>{
    var aud= new Audio('sounds/tom-3.mp3');
    aud.play();
})
L.addEventListener('click',()=>{
    var aud= new Audio('sounds/tom-4.mp3');
    aud.play();
})
document.addEventListener(('keydown'),(event)=>{
    playSong(event.key);
})
function playSong(event){
    switch (event){
        case"w":
        var aud= new Audio('sounds/crash.mp3');
        aud.play();
        break;
        case"a":
        var aud= new Audio('sounds/kick-bass.mp3');
        aud.play();
        break;
        case"s":
        var aud= new Audio('sounds/snare.mp3');
        aud.play();
        break;
        case"d":
        var aud= new Audio('sounds/tom-1.mp3');
        aud.play();
        break;
        case"j":
        var aud= new Audio('sounds/tom-2.mp3');
        aud.play();
        break;
        case"k":
        var aud= new Audio('sounds/tom-3.mp3');
        aud.play();
        break;
        case"l":
        var aud= new Audio('sounds/tom-4.mp3');
        aud.play();
        break;
    }
}