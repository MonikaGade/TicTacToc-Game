let boxes=document.querySelectorAll('.box');
let gamereset=document.querySelector(".game-reset");
let congrat=document.querySelector(".congrat");
let hide=document.querySelector('.hide');
let winnercontainer=document.querySelector('.winner-container');
let startGame=document.querySelector('.start-game');
let patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,6],[0,4,8],[2,4,6]];
let playerA=true;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(playerA){
            box.innerText="O";
            playerA=false;
        }
        else{
            box.innerText="X";
            playerA=true;
        }
       box.disabled=true;
       checkPattern()
    })
})
let winner=(winner)=>{
    congrat.innerText=`Congratulations, u won ${winner}`;
    for(let box of boxes){
        box.disabled=true;
    }
    hide.style.display="block";
}
let checkPattern=()=>{
    for(let pattern of patterns){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
        if(position1!=="" && position2!==" " && position3!==""){
            if(position1===position2 && position2===position3){
                winner(position1);
            }
        }
    }
}
let reset=function(){
    playerA=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    hide.style.display="none";  
}
gamereset.addEventListener('click',reset);
startGame.addEventListener('click',reset);