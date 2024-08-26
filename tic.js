console.log("working");
 
let music = new Audio("music.mp3")
let gameOverMusic = new Audio("gameover.mp3")
let turnMusic = new Audio("ting.mp3")
let turn ="X"
let isgameover = false;


// / funciton to change the turn

function changeTurn(){
    if (turn === "X"){
        return "0"

    }else {
        return "X"
    }
}

// function to check win
let checkWin = ()=>{
    let boxTexts = document.querySelectorAll(".gamebox");
    let win=[
            [0, 1, 2], // Row 1
            [3, 4, 5], // Row 2
            [6, 7, 8], // Row 3
            [0, 3, 6], // Column 1
            [1, 4, 7], // Column 2
            [2, 5, 8], // Column 3
            [0, 4, 8], // Diagonal 1
            [2, 4, 6]  // Diagonal 2
        ];
        win.forEach(e =>{
        if ((boxTexts[e[0]].innerHTML === boxTexts[e[1]].innerHTML) &&
            (boxTexts[e[1]].innerHTML === boxTexts[e[2]].innerHTML) &&
            (boxTexts[e[0]].innerHTML !== ""))
            {
                music.pause()   
                document.querySelector(".info").innerText = boxTexts[e[0]].innerHTML + " " + "wins" 
                document.querySelector(".reset").style.display = "block";
                isgameover = true
                gameOverMusic.play()
                // reset()
                // alert("gameover")
            }

        })
    

}
document.querySelector(".reset").addEventListener("click", reset)
function reset(){
    
        let boxTexts = document.querySelectorAll(".gamebox")

        boxTexts.forEach(element =>{
            element.innerHTML = ""
        })
        isgameover = false
        turn = "X"
        document.querySelector(".info").innerText = `your turn : ${turn}` 

        document.querySelector(".reset").style.display = "none";

     

    
}
let boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".gamebox");
    element.addEventListener("click", () => {
        if (boxText.innerHTML === "") {
            boxText.innerHTML = turn;
            music.play();
          turn =  changeTurn();
            turnMusic.play();
            checkWin();
            if(!isgameover){
            document.querySelector(".info").innerText = `your turn : ${turn}` 
            }
        }
    });
});

