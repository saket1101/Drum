//detectin button press
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnnimation(buttonInnerHTML);
        
    });


}
//detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var snare = new Audio('sound/snare.mp3');
            snare.play();

            break;

        case "a":
            var kick = new Audio('sound/kick-bass.mp3');
            kick.play();


            break;
        case "s":
            var crash = new Audio('sound/crash.mp3');
            crash.play();

            break;

        case "d":
            var tom1 = new Audio('sound/tom-1.mp3');
            tom1.play();

            break;

        case "j":
            var tom2 = new Audio('sound/tom-2.mp3');
            tom2.play();

            break;

        case "k":
            var tom3 = new Audio('sound/tom-3.mp3');
            tom3.play();

            break;

        case "l":
            var tom4 = new Audio('sound/tom-4.mp3');
            tom4.play();

            break;
        default: console.log("buttonInnerHTML");
            break;
    }


}
function buttonAnnimation(currnentKey){
    var activeButton = document.querySelector("." + currnentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
        
    }, 100);
}