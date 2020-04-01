
const car = document.querySelector('a');

let colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'pink', 'purple', 'orange', 'grey', 'brown', 'turquoise'];

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
     
 
    /* 
     function myFunction(){
          const couleurs = document.getElementsById('mots').childNodes;
     
          for (i = 0; i < couleurs.length; i++) {
              return couleurs[i].text;
            }
         } 
    */

 
//const couleurs = document.getElementsById('mots').childNodes;
//const couleurs = Array.from(document.querySelector('#mots').childNodes);
     