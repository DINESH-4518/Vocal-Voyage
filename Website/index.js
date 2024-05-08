var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0;i<noOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;   
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
});     


function makeSound(key){
    switch(key){
        case "n":
                var tom1 = new Audio("songs/Neevalle.mp3");
                tom1.play();
                break;

        case "p":
                var tom2 = new Audio("songs/Pehle-bhi.mp3");
                tom2.play();
                break;

        case "o":
                var tom3 = new Audio("songs/OmDeva.mp3");
                tom3.play();
                break;

        case "b":
                var tom4 = new Audio("songs/Buttabomma.mp3");
                tom4.play();
                break;

        case "t":
                var crash = new Audio("songs/Terebin.mp3");
                crash.play();
                break;

        case "s":
                var snare = new Audio("songs/Saveronka.mp3");
                snare.play();
                break;

        case "a":
                var s1 = new Audio("songs/Andamaina.mp3");
                s1.play();
                break;

        case "y":
                var s2 = new Audio("songs/Bairiya.mp3");
                s2.play();
                break;

        case "k":
                var kick = new Audio("songs/Kesariya.mp3");
                kick.play();
                break;

        case "c":
                var s3 = new Audio("songs/Chilake.mp3");
                s3.play();
                break;

        case "g":
                var s4 = new Audio("songs/Geena_Geena.mp3");
                s4.play();
                break;

        case "i":
                var s5 = new Audio("songs/Ishq.mp3");
                s5.play();
                break;

        case "z":
                var s6 = new Audio("songs/Manasa.mp3");
                s6.play();
                break;

        case "d":
                var s7 = new Audio("songs/Nijame.mp3");
                s7.play();
                break;

        case "e":
                var s8 = new Audio("songs/Oke_Oka.mp3");
                s8.play();
                break;

        case "f":
                var s9 = new Audio("songs/Tu_jhor.mp3");
                s9.play();
                break;

        case "j":
                var s0 = new Audio("songs/Jab-tak.mp3");
                s0.play();
                break;

        default:
                console.log(key);
        
    }
}
