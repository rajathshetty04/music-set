 var size=document.getElementsByClassName("keys").length;

  for (var i=0;i<size;i++)
  {
  document.getElementsByClassName("keys")[i].addEventListener("click", function(){
        var key=this.innerHTML;
       makeSound(key);
       buttonAnimation(key);
  });
  }

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
  });

  function makeSound(key)
  {
  
   switch(key){
          case "w":
          case "W":
                   var crash = new Audio('../sounds/crash.mp3');
                    crash.play();
                    break;
          case "s":
          case "S":
                   var kickBass = new Audio('../sounds/kick-bass.mp3');
                    kickBass.play();
                    break;
          case "d":
          case "D":
                   var snare= new Audio('../sounds/snare.mp3');
                    snare.play();
                    break;                   
          case "f":
          case "F":
                   var tom1= new Audio('../sounds/tom-1.mp3');
                    tom1.play();
                    break;
          case "j":
          case "J":
                   var tom2 = new Audio('../sounds/tom-2.mp3');
                    tom2.play();
                    break; 
          case "k":
          case "K":
                   var tom3= new Audio('../sounds/tom-3.mp3');
                    tom3.play();
                    break;
          case "l":
          case "L":
                   var tom4 = new Audio('../sounds/tom-4.mp3');
                    tom4.play();
                    break;                               
        }
  }


function buttonAnimation(currentkey)
{
  var activeButton=document.querySelector("." + (currentkey.toUpperCase()));
  // var activeButton=document.getElementsByClassName((currentkey.toUpperCase()));

  // console.log(activeButton);
  // console.log(activeButton.classList)

  activeButton.classList.add("pressed"); 

  // console.log(activeButton.classList)

   setTimeout(function() {
  activeButton.classList.remove("pressed");
   }, 100);
}