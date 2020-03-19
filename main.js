// when click on the car it changes color, color written beneath the car, and sound! then svg's head moves   

// to click on the car image
const car = document.querySelector('a');

//colors array
let colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'pink', 'purple', 'orange', 'grey'];

// add event listener+ function
car.addEventListener('click', function(){
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
     car.style.color = randomColor;
     
})


