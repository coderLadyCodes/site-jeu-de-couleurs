// when click on the car it changes color, color written beneath the car, and sound! then svg's head moves   
let car = document.querySelector('a');
let colors = ["red", "blue", "green", "yellow", "black", "white", "pink", "purple", "orange", "grey"];
for (let i = 0; i < colors.length; i++);


car.addEventListener('click',changeColor);

function changeColor(){
    this.style.color = 'blue'; 
}

