const play = document.getElementById("display");

function btn(input){
    const play = document.getElementById("display");
    play.value += input;
    
}

function calculate(){
    const play = document.getElementById("display");
    play.value = eval(play.value);
}
function clr() {
    const play = document.getElementById("display");
    play.value = "";
}