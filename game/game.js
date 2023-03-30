console.log("this is tip_top game");
let boxs = Array.from(document.getElementsByClassName("box"));
let con1 = document.getElementsByClassName("con1");
let change = document.getElementsByClassName("change");
let text = Array.from(document.getElementsByClassName("text"));
let btn = document.getElementById("btn");
document.querySelector(".line").style.display = "none";
let index = 0;
let index2 = 0;
let audioele = new Audio("ting.mp3");
let game = false;
let img2 = document.getElementById("img2");
img2.style.opacity = 0;
boxs.forEach((ele, i) => {
    ele.addEventListener("click", (e) => {
        console.log("clicked");
        // ele.innerHTML="x";
        let v = ele.children;
        // v[0].innerHTML == "0"
        console.log(v);
        if (v[0].innerText === "") {
            if (index === 0 || index % 2 === 0) {
                v[0].innerHTML = "X";
                checkWin();
                if (!game) {
                    text[0].innerHTML = "O Turn"
                    audioele.play();
                }
                /////////  main point of all time


            }
            else {
                v[0].innerHTML = "O";
                checkWin();
                if (!game) {
                    text[0].innerHTML = "X Turn"
                    audioele.play();
                }

            }
        }
        index++;
    })
});
// console.log(boxs);
// console.log(text[0]);
// btn.addEventListener("click", (e) => {
//     boxs.forEach((ele, i) => {


//         let v = ele.children;

//         v[0].innerHTML = "";
//         document.querySelector(".line").style.display = "none";
//         img2.style.opacity = 0;

//     });
// })
// function checkWin() {
//     let boxtext = document.getElementsByClassName('t');
//     // console.log(boxtext.innerText);
//     let wins = [
//         [0, 1, 2, 0, 48, 0],
//         [3, 4, 5, 0, 154, 0],
//         [6, 7, 8, 0, 257, 0],
//         [0, 3, 6, -107, 152, 90],
//         [1, 4, 7, 4, 152, 90],
//         [2, 5, 8, 107, 152, 90],
//         [0, 4, 8, -3, 148, 45],
//         [2, 4, 6, , 0, 153, 135],
//     ]
//     wins.forEach(e => {
//         if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
//             console.log("this is me");
//             text[0].innerHTML = boxtext[e[0]].innerText + " Won"

//             document.querySelector(".line").style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`
//             document.querySelector(".line").style.display = "block";
//             // document.querySelector(".line").classList.add="l1"
//             console.log("this is me");
//             game = true
//             console.log("this is me");
//             img2.style.opacity = 1;

//         }
//     })
// }





