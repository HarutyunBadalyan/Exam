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
// let ticTacToeBoard = [
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ]
// let firstOrSecond = 0;
// let firstPlayer = {
//     sign: "X",
//     row: undefined,
//     column: undefined,
// }
// let secondPlayer = {
//     sign: "0",
//     row: undefined,
//     column: undefined,
// }


// function checkFreePlaces (arr) {
//     let bool = true
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].indexOf(0) !== -1) {
//             return true;
//         }
//         else {
//             bool = false
//         }
//     }
//     return bool;
// }

// function checkFirstPlayerwin(arr) {
//     let sideCount = 0;
//     let sideCountR = 0;
//     for(let i = 0; i < arr.length; i++) {
//         let count = 0;
        
//         if(arr[i].indexOf("X") !== -1  && arr[i].indexOf("0") === -1 && arr[i].indexOf(0) === -1  ) {
//             return true;
//         }
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j][i] === "X") {
//                 count++;
//             }
//             if(i === j && arr[i][j] === "X") {
//                 console.log("arr[i][j]",arr[i][j])
//                 sideCount++
//             }
//             if(i + j === 2 && arr[i][j] === "X" ) {
//                  sideCountR++
//             }
//         }
//         if(count === 3) {
//             return true;
//         }
//         if(sideCount === 3) {
//             return true;
//         }
//         if(sideCountR === 3) {
//             return true;
//         }
//         console.log("sidecount", sideCount)
//     }
// }
// function checkSecondPlayerwin(arr) {
//     let sideCount = 0;
//     let sideCountR = 0;
//     for(let i = 0; i < arr.length; i++) {
//         let count = 0
//         if(arr[i].indexOf("0") !== -1  && arr[i].indexOf("X") === -1 && arr[i].indexOf(0) === -1  ) {
//             return true;
//         }
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j][i] === "0") {
//                 count++;
//             }
//             if(i === j && arr[i][j] === "0") {
//                 console.log("arr[i][j]",arr[i][j])
//                 sideCount++
//             }
//             if(i + j === 2 && arr[i][j] === "0" ) {
//                 sideCountR++
//            }
            
//         }
//         if(count === 3) {
//             return true;
//         }
//         if(sideCount === 3) {
//             return true;
//         }
//         if(sideCountR === 3) {
//             return true;
//         }
        
//     }
// }

// document.body.addEventListener("click", (e) => {
//     console.log(e.target.id)
//     console.log(e.target.parentNode.id)
//     if(firstOrSecond === 0) {
//         if(ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] !== 0) {
//             return;
//         }
       
//         ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] = firstPlayer.sign;
//         document.getElementById(e.target.id).innerHTML = firstPlayer.sign;
//         document.getElementById("player").innerHTML = "second player"

//         if(checkFirstPlayerwin(ticTacToeBoard)) {
//            return document.write("game was ended first player win")
//         }
//         if(!checkFreePlaces(ticTacToeBoard)) {
//           return  document.write("game was ended draw")
//         }
//     }
//     if(firstOrSecond === 1) {
//         if(ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] !== 0) {
//             return;
//         }

        

//         ticTacToeBoard[Number(e.target.parentNode.id.split(":")[1])][Number(e.target.id.split(":")[1])] = secondPlayer.sign;
//         document.getElementById(e.target.id).innerHTML = secondPlayer.sign;
//         document.getElementById("player").innerHTML = "first player"

//         if(checkSecondPlayerwin(ticTacToeBoard)) {
//           return  document.write("game was ended second player win")
//         }
//         if(!checkFreePlaces(ticTacToeBoard)) {
//             return document.write("game was ended draw")
//         }
//     }
   
//     firstOrSecond === 1? firstOrSecond = 0:firstOrSecond = 1;
// })


