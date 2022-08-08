
let r = Math.floor((Math.random())*256);
let g = Math.floor((Math.random())*256);
let b = Math.floor((Math.random())*256);

const colorName = document.getElementById('colorName');

const btn = document.getElementsByClassName('btn');

const color1 = document.getElementById('1');
const color2 = document.getElementById('2');
const color3 = document.getElementById('3');

colorName.innerHTML='(' + r + ',' + g + ',' + b + ')';


let index=Math.floor((Math.random())*3);



color1.style.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';



let r1 = Math.floor((Math.random())*256);
let g1 = Math.floor((Math.random())*256);
let b1 = Math.floor((Math.random())*256);

color2.style.backgroundColor='rgb(' + r1 + ',' + g1 + ',' + b1 + ')';


let r2 = Math.floor((Math.random())*256);
let g2 = Math.floor((Math.random())*256);
let b2 = Math.floor((Math.random())*256);

color3.style.backgroundColor='rgb(' + r2 + ',' + g2 + ',' + b2 + ')';



function guessColor(){
    if (document.activeElement.id==index) {
        colorName.innerHTML='CORECT!';
        colorName.style.color='green';
        
    }else{
        colorName.innerHTML='INCORRECT!!';
        colorName.style.color='red';
    }

    btn[0].removeAttribute('onclick');

    btn[1].removeAttribute('onclick');

    btn[2].removeAttribute('onclick');
}

function reply() {
    window.location.reload();
}