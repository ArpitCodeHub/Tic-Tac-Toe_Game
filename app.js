let boxes = document.querySelectorAll(".boxes");

let newBtn = document.querySelector(".newGame");

let msg = document.querySelector("#msg");

let msgContainer = document.querySelector(".msg-container")

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

let turn = true;

const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (turn === true){
            box.innerText = "X"
            turn = false
        }
        else if (turn === false) {
            box.innerText = "O"
            turn = true
        }
        box.disabled = true;

        checkWinner();
    });                            // EVENT LISTENER OVERS HERE
});

    const showWinner = (winner) => {
        msg.innerText = `CONGO ! The Winner is ${winner} `;
        msgContainer.classList.remove("hide");
    }

    const checkWinner = () => {
        for (let pattern of winPatterns){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
        
            if (pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                    console.log("WINNER",pos1)
                    disableBoxes()
                    showWinner(pos1)

                }
        
            }
        }
};

const resetGame = ()=>{
    turn = true;
    enableBoxes()
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click",resetGame);