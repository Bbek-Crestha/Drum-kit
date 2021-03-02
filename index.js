for(var i = 0; i < document.getElementsByClassName("btn").length; i++) {
    document.getElementsByClassName("btn")[i].addEventListener("click", function () {
        var pressedBtn = this.innerHTML;
        makeSound(pressedBtn);
        btnAnimation(pressedBtn);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    btnAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}

function btnAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    document.querySelector("." + currentKey).classList.add("red");
    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
        document.querySelector("." + currentKey).classList.remove("red");
    }, 200);
}