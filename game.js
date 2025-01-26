let boxes = document.querySelector(".Box");
let resetBtn = document.querySelector(".reset");

let turn_O = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn_O){
            box.innertext ="O";
            turn_O = "false";
        }
        else{
            box.innertext ="X";
            turn_O = "true";
        }
    });
});