var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(word) {

  switch (word) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      cansole.log(word);
  }
}

function buttonAnimation(currentkey) {
  document.querySelector("." + currentkey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + currentkey).classList.remove("pressed")
  }, 3000);
}
