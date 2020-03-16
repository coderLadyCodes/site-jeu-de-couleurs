// when click on the car it changes color, color written beneath the car, and sound! then svg's head moves   
let car = document.querySelector('a');

car.addEventListener('click',changeColor);

function changeColor(){
    this.style.color = 'yellow'; 
}

