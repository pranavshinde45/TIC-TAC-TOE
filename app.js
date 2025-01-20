let boxes=document.querySelectorAll(".box")
let winner=document.querySelector(".winner")
let congrats=document.querySelector(".congrats")
let newgame=document.querySelector(".new")
let resetgame=document.querySelector(".reset")
let main=document.querySelector(".main")

let turn0=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkwinner()
    })
})

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
                console.log(`the winner is ${pos1}`)
                showwinner(pos1)
            }
        }
    }
}
function showwinner(win){
    winner.style.display="block";
    congrats.innerText=`The winner is ${win}`;
    disable();
}
disable=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
enable=()=>{
    for (let box of boxes){
        box.disabled=false;
    }
}
newgame.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        enable()
        main.classList.remove("none")
        winner.style.display="none"
    }
})
resetgame.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText=""
    }
})