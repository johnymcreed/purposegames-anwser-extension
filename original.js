function getRandomFloat(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let interval = 50;
let num_to_get = 18

let looped = setInterval(process_rnd_clicks, interval)

let guess_corr = document.querySelector("#guesses-correct");
let guess_wron = document.querySelector("#guesses-wrong");
let guess_left = document.querySelector("#guesses-left");

function process_rnd_clicks() {

    if (guess_corr.outerText == num_to_get) { // correct! 
        console.log("Got all "+ num_to_get, "stopping....")
        clearInterval(looped);
    }

    if ($("#start").length) // Auto start
        $("#start").trigger("click");

    if (guess_left.outerText == 1) { // guesses are over and we didn't get 20 correct so restart
        setTimeout(() => {
            clearInterval(looped)
            window.location.reload();
        }, 1)
        console.log("Didn't get all "+ num_to_get +" right.", "starting again....")
        return
    }

    let guess = 0;
    guess = getRandomFloat(0, getRandomFloat(0, 4));

    console.log("Chosen:", guess);
    $('.mcanswer[data-id="'+ guess +'"]').css("font-weight", "900")

    setTimeout(() => {
        $('.mcanswer[data-id="'+ guess +'"]').trigger("click");
        $('.mcanswer[data-id="'+ guess +'"]').css("font-weight", "inherit")
    }, interval-10)
}
    
