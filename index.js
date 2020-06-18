var x = [14,5,6,8,9,1,3,5,4,9,8,7,6,3,22,15];

var len = x.length;
var bar;
const sort = document.getElementById("sortBtn");
sort.addEventListener("click", bubbleSort);

const temp = document.getElementById("temp");
const main = document.getElementById("main");
const barContainer = document.getElementById("barContainer");
init();

function init() {
  for (var i = 0; i < x.length; i++) {
    bar = document.createElement("div");
    bar.classList.add("bar");
    bar.setAttribute("id", `bar${i}`);
    var barHeight = document.createElement("p");
    barHeight.classList.add("barHeight");
    barHeight.innerHTML = x[i];
    bar.style.height = x[i] * 20 + "px";
    bar.appendChild(barHeight);
    barContainer.appendChild(bar);
  }
}

function delay(t) {
  setTimeout(function () {}, t);
}

function bubbleSwapCnt() {
  let swapCnt = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (x[j] > x[j + 1]) {
        swapCnt++;
      }
    }
  }
  //   console.log(swapCnt);
  return swapCnt;
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
async function bubbleSort() {
    let iteration = 0;
    let swapCount = bubbleSwapCnt();
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (x[j] > x[j + 1]) {
          var temp = x[j];
          x[j] = x[j + 1];
          x[j + 1] = temp;
          iteration++;
          //   console.log(iteration);
          if (iteration <= swapCount) {
              removeAllChildNodes(barContainer);
            }
            init();
            document.getElementById(`bar${j+1}`).classList.add('blue');
            document.getElementById(`bar${j}`).classList.add('blue');

          console.log(x[j] +" "+ x[j+1]);

          await timer(1000);
        }
      }
    }
  }


function removeClick() {
  message = document.createElement("p");
  message.classList.add("message");
  message.innerHTML = "Already Sorted!";
  main.appendChild(message);
  sort.removeEventListener("click", bubbleSort);
}
