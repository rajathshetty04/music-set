var size=document.getElementsByClassName("keys").length;

for (var i=0;i<size;i++){
document.getElementsByClassName("keys")[i].addEventListener("click", function(){
      var keys=this.innerHTML;
     makeSound(keys);
     buttonAnimation(keys);
});
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
 switch(key){
        case "d":
        case "D":
                 var d = new Audio('../piano-sounds/28.mp3');
                  d.play();
                  break;
        case "f":
        case "F":
                 var f = new Audio('../piano-sounds/30.mp3');
                  f.play();
                  break;
        case "g":
        case "G":
                 var g = new Audio('../piano-sounds/34.mp3');
                  g.play();
                  break;                   
        case "h":
        case "H":
                 var h = new Audio('../piano-sounds/38.mp3');
                  h.play();
                  break;
        case "j":
        case "J":
                 var j = new Audio('../piano-sounds/40.mp3');
                  j.play();
                  break; 
        case "k":
        case "K":
                 var k = new Audio('../piano-sounds/42.mp3');
                  k.play();
                  break;
        case "l":
        case "L":
                 var l = new Audio('../piano-sounds/44.mp3');
                  l.play();
                  break;
        case "r":
        case "R":
                  var r = new Audio('../piano-sounds/50.mp3');
                  r.play();
                  break;
        case "t":
        case "T":
                  var t = new Audio('../piano-sounds/51.mp3');
                    t.play();
                    break;
        case "u":
        case "U":
                  var u = new Audio('../piano-sounds/52.mp3');
                    u.play();
                    break;
        case "i":
        case "I":
                  var i = new Audio('../piano-sounds/58.mp3');
                    i.play();
                    break;
                                       
        case "o":
        case "O":
                  var o = new Audio('../piano-sounds/60.mp3');
                    o.play();
                    break;
                                       
      }
}

function buttonAnimation(currentkey)
{
  var activeButton=document.querySelector("."+(currentkey.toUpperCase()));
   activeButton.classList.add("pressed"); 

   setTimeout(function() {
  activeButton.classList.remove("pressed");
   }, 100);
}