const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0
function init() {
document.body.addEventListener('keydown', function(e){const x = e.key;
   if (x === konami[index]){
     index++;
    
     if (index === (konami.length - 1)){
       alert ("You did it");
       index = 0;
       
     }
   }else {
     index = 0;
   }})
   
 }
 

