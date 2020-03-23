// to click on the car image
const car = document.querySelector('a');


let colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'pink', 'purple', 'orange', 'grey', 'brown', 'turquoise'];

//let sound = ['audio/rouge.mp3', 'audio/bleu.mp3', 'audio/vert.mp3', 'audio/jaune.mp3', 'audio/noir.mp3', 'audio/blanc.mp3', 'audio/rose.mp3', 'audio/violet.mp3', 'audio/orange.mp3', 'audio/gris.mp3', 'audio/marron.mp3', 'audio/turquoise.mp3'];

let colorSound = [new Audio('red.mp3'), new Audio('blue.mp3'), new Audio('green.mp3'), new Audio('yellow.mp3'), new Audio('black.mp3'), new Audio('white.mp3'), new Audio('pink.mp3'), new Audio('purple.mp3'), new Audio('orange.mp3'), new Audio('grey.mp3'), new Audio('brown.mp3'), new Audio('turquoise.mp3')];

let i = 0 ;
car.addEventListener('click', function(){
     i++;
     car.style.color = colors[i];
     colorSound[i].play();
     if(i === colors.length - 1){
          i = -1; 
          
     }

     })
   
 
  
  