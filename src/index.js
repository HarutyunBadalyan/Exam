//3.count ցույց  է տալիս որերորդ անդամ է։ սկսվում է 0-ից
// let firstNumber = 0;
// let secondNumber = 1;
// let count = 0;
// while(count < 100) {
//     let sum = firstNumber + secondNumber;
//     console.log(firstNumber);
//     firstNumber = secondNumber;
//     secondNumber = sum;
//     count++;
// }

//4.
// function multiplyTwoNumbersWillBeEqualSumOfFromOneToNExceptTwoInputValues(n, a, b) {
//     let sum = 0;
//     while(n > 0) {
       
//         if(n !== a && n!== b) {
            
//             sum += n;
//         }
//         n--;
//     }
//     console.log(sum)
//     if(sum === a * b) {
//         return {n,a,b}
//     }
//     return false;
// }
// console.log(multiplyTwoNumbersWillBeEqualSumOfFromOneToNExceptTwoInputValues(4, 1, 2))


//5.
let ticTacToeBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let firstOrSecond = 0;
let firstPlayer = {
    sign: "X",
    row: undefined,
    column: undefined,
}
let secondPlayer = {
    sign: "0",
    row: undefined,
    column: undefined,
}
GameEnd = false;
let str = ""


document.body.addEventListener("click", (e) => {
    console.log(e.target.id)
    console.log(e.target.parentNode.id)
    console.log("gameend",GameEnd)
    if(GameEnd) {
        document.write("game is ended please reload");
        return;
    }
    if(firstOrSecond === 0) {
        if(ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] !== 0) {
            return;
        }
        ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] = firstPlayer.sign;
        document.getElementById(e.target.id).innerHTML = firstPlayer.sign;
        console.log("first")
        firstOrSecond = 1;
        console.log(ticTacToeBoard)
        document.getElementById("player").innerHTML = "secondPlayer"
       
        ticTacToeBoard.forEach((item ) => {
            if(item.indexOf(0) === -1) {
                GameEnd = true;
            } else {
                GameEnd = false;
            }
        })
        if(GameEnd) {
            document.write("game is ended please reload ",str);
            return;
        }
        
        ticTacToeBoard.forEach((item,index ) => {
            let count = 0;
            if(item.indexOf("X") !== -1 && item.indexOf("0") === -1 && item.indexOf(0) === -1 ) {
                GameEnd = true;
                str = "firstPlayer win"
                document.write("game is ended please reload ",str);
                return;
            } else {
                str = "draw"
                GameEnd = false;
            }
           item.forEach((item2,index2) => {
            
                     
           })
           console.log("count",count)
            
            
        })


        
        return;
    } 
    if (firstOrSecond === 1) {
        if(ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] !== 0) {
            return;
        }
        ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] = secondPlayer.sign; 
        console.log("second")
        console.log(ticTacToeBoard)
        firstOrSecond = 0;
        document.getElementById(e.target.id).innerHTML = secondPlayer.sign;
        document.getElementById("player").innerHTML = "firstPlayer"
        
        ticTacToeBoard.forEach((item ) => {
            if(item.indexOf(0) === -1) {
                GameEnd = true;
            } else {
                GameEnd = false;
            }
        })
        if(GameEnd) {
            document.write("game is ended please reload",str);
            return;
        }
     
       
        ticTacToeBoard.forEach((item ) => {
            if(item.indexOf("0") !== -1 && item.indexOf("X") === -1 && item.indexOf(0) === -1 ) {
                GameEnd = true;
                str = "secondPlayer win"
                document.write("game is ended please reload",str);
                return;
            } else {
                str = "draw"
                GameEnd = false;
            }
           item.forEach(item2 => {

           })
            
        })

        
        return;
    }
   
    //console.log(ticTacToeBoard)
})


console.table(ticTacToeBoard)