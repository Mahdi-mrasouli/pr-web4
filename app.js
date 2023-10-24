// Mouse Click Sound
var numberOfKeys = document.querySelectorAll('.key').length;
for (var i = 0; i < numberOfKeys; i++) {
     document
          .querySelectorAll('.key')
          [i].addEventListener('click', function (e) {
               var audio1 = new Audio('Sounds/pressKeysound2.mp3');
               audio1.play();

               console.log(e.target);
          });
}

// keyboard keys Sound
document.addEventListener('keydown', function (event) {
     var audio1 = new Audio('Sounds/pressKeysound2.mp3');
     audio1.play();

     changeButtonState('unpressed', event);
});

document.addEventListener('keyup', function (event) {
     var audio1 = new Audio('Sounds/pressKeysound2.mp3');

     changeButtonState('pressed', event);
});

// for(var i = 0; i < numberOfKeys; i++) {

//     document.querySelectorAll(".key")[i].addEventListener("keypress", function(event){
//     })
// }

// document.querySelector(".space").addEventListener("click", function(){
//     var audio = new Audio("pressspacekeysound.mp3")
//     audio.play();
// })

function changeButtonState(currentState, event) {
     const nodes = document.querySelectorAll('button');
     const keys = [...nodes];

     const key = keys.filter((key) => event.key === key.dataset.key);
     if (key.length) {
          if (currentState === 'unpressed') {
               key[0].classList.add('test');
          } else {
               key[0].classList.remove('test');
          }
     }
}
