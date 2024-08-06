var numberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
                 
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();                
            break;
        case "s":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();                
            break;
        case "d":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();                
            break;
        case "j":
            var kick = new Audio("sounds/tom-1.mp3")
            kick.play();                
            break;
        case "k":
            var kick = new Audio("sounds/tom-2.mp3")
            kick.play();                
            break;
        case "l":
            var kick = new Audio("sounds/tom-3.mp3")
            kick.play();                
            break;
        case "i":
            var kick = new Audio("sounds/tom-4.mp3")
            kick.play();                
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");       
    }, 100);
}

