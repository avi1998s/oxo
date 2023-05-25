
// body--------------------------------------------------------------------------body
appendTo(crateELM("div", "center", "msgH"), "body");
appendTo(crateELM("div", "hed container-fluid center"), "body");
appendTo(crateELM("main", "a", "main"), "body");
// msgH--------------------------------------------------------------------------msgH
appendTo(crateELM("h2", "", "", "choose board size"), "#msgH");
appendTo(crateELM("div"), "#msgH");
appendTo(crateELM("button", "", "c3", "3X3"), "#msgH > div");
appendTo(crateELM("button", "", "c4", "4X4"), "#msgH > div");
appendTo(crateELM("button", "", "c5", "5X5"), "#msgH > div");
appendTo(crateELM("button", "", "c7", "7X7"), "#msgH > div");
// hed-------------------------------------------------------------------------------hed
appendTo(crateELM("div", "center", "result"), ".hed");
appendTo(crateELM("nav", "container center"), ".hed");
appendTo(crateELM("div", "timer container center"), ".hed");
// result
appendTo(crateELM("div", "", "result2", "X pleyer = "), "#result");
appendTo(crateELM("div", "", "result1", "O pleyer = "), "#result");
// result spans
appendTo(crateELM("span", "", "Oresult"), "#result1"),
  appendTo(crateELM("span", "", "Xresult"), "#result2");
// nav buttons
appendTo(crateELM("button", "", "ristart", "<b>new game</b>"), ".hed nav");
appendTo(crateELM("button", "", "undo", "<b>undo</b>"), ".hed nav");
appendTo(crateELM("button", "", "record", "<b>record:</b>"), ".hed nav");
appendTo(crateELM("button", "", "save", "<b>save</b>"), ".hed nav");
appendTo(crateELM("button", "", "relod", "<b>relod</b>"), ".hed nav");
appendTo(crateELM("button", "", "clear", "<b>clear</b>"), ".hed nav");
appendTo(crateELM("span", "", "spanRecord", ""), "#record b");
// טיימר
appendTo(crateELM("div", "s center", "", ""), ".timer");
appendTo(crateELM("div", "b center", "", ""), ".timer");
appendTo(crateELM("span", "", "over", "00"), ".timer .s");
appendTo(":", ".timer .s");
appendTo(crateELM("span", "", "minute", "00"), ".timer .s");
appendTo(":", ".timer .s");
appendTo(crateELM("span", "", "secense", "00"), ".timer .s");
appendTo(crateELM("button", "", "startbtu", "start"), ".timer .b");
appendTo(crateELM("button", "", "stopbtu", "stop"), ".timer .b");
//main-------------------------------------------------------------------------main
appendTo(crateELM("div", "container-floyd center", ""), "main"),
appendTo(crateELM("div", "container"), "#main > div");
let restartButton = getELM("ristart");
let undoButton = getELM("undo");
let recordButton = getELM("record");
let saveButton = getELM("save");
let relodButton = getELM("relod");
let clearBtutton = getELM("clear");
// spans
let spanRecord = getELM("spanRecord");
let xSpan = getELM("Xresult");
let oSpan = getELM("Oresult");
// general variables ----------------------------------------general variables
let playerX = { val: "X", record: 0,position:[]};
let playerO = { val: "O", record: 0,position:[]};
let player = playerO,stepsCunter = 0,recordArr = [],arrAll = [],allbuttons,bordSize,classA,classB
// ------------------------------------------------------------------------------------------------------------------------------------------
// board-----------------------------------------------------------board
// ----------------make board-------------------
msgf()
function msgf(board) {
  let msgDiv = [...document.querySelectorAll("#msgH button")];
  msgDiv.forEach((b) => {
    b.addEventListener("click", (e) => {
      let board = Number(e.target.id.slice(1));
      bordSize =board
      makeButoons(board)
      styleB(board)
      getELM("msgH").style.display = "none";
      classA= [...document.querySelectorAll(".butA")]
      classB= [...document.querySelectorAll(".butB")]      
    });
  });
}
function makeButoons(board) {
  let cunter = 1;
  for (i = 1; i <= board; i++) {
    arrAll.push([]);
    for (j = 1; j <= board; j++) {
      let className =
        cunter % 2 == 0 ? "playBut butB center" : "playBut butA center";
        appendTo(crateELM("button", className, `b${i}-${j}`), "#main .container");
        cunter == 2 ? (cunter = 1) : (cunter = 2);
        if (board == 4 && j == 4) {
          cunter == 2 ? (cunter = 1) : (cunter = 2);
        }
      }
  }
}
function styleB (bordSize){
  clearLs()
  saveFun()
  allbuttons = [...document.getElementsByClassName("playBut")];
  allbuttons.forEach((b) => {
    b.addEventListener("click", gameClick2);
    if (bordSize == 3) {
      const mediaQuery700_3 = window.matchMedia("(max-width: 700px)");
    const hendelMediaQuery700_3 = (e) => {
      if (e.matches) {
        getElemQ("main .container").style.width = "100%";
        getElemQ("main .container").style.height = "70vh";
        allbuttons.forEach((b) => (b.style.fontSize = "20vw"));
        allbuttons.forEach((b) => (b.style.height = "33.3%"));
        allbuttons.forEach((b) => (b.style.width = "33.3%"));
      } else {
        getElemQ("main .container").style.width = "50vw";
        getElemQ("main .container").style.height = "34vw";
        allbuttons.forEach((b) => (b.style.fontSize = "12vw"));
        allbuttons.forEach((b) => (b.style.height = "33.3%"));
        allbuttons.forEach((b) => (b.style.width = "33.3%"));
      }
    };
    mediaQuery700_3.addListener(hendelMediaQuery700_3);
    hendelMediaQuery700_3(mediaQuery700_3);
  }
  if (bordSize == 4) {
    // 920----------------------------------------------------------------------
    const mediaQuery920_4 = window.matchMedia("(max-width: 920px)");
    const mediaQuery700_4 = window.matchMedia("(max-width: 700px)");

    const hendelMediaQuery = (e) => {
      if (mediaQuery920_4.matches) {
        getElemQ("main .container").style.width = "100%";
        getElemQ("main .container").style.height = "70vh";
        allbuttons.forEach((b) => {
          b.style.fontSize = "15vw";
          b.style.width = "25%";
          b.style.height = "25%";
        });
      } else if (mediaQuery700_4.matches) {
        getElemQ("main .container").style.width = "100%";
        getElemQ("main .container").style.height = "70vh";
        allbuttons.forEach((b) => {
          b.style.fontSize = "20vw";
          b.style.width = "25%";
          b.style.height = "25%";
        });
      } else {
        getElemQ("main .container").style.width = "50vw";
        getElemQ("main .container").style.height = "34vw";
        allbuttons.forEach((b) => {
          b.style.fontSize = "9vw";
          b.style.width = "25%";
          b.style.height = "25%";
        });
      }
    };

    mediaQuery920_4.addListener(hendelMediaQuery);
    mediaQuery700_4.addListener(hendelMediaQuery);
    hendelMediaQuery(mediaQuery920_4);
    hendelMediaQuery(mediaQuery700_4);
  }
  if (bordSize == 5) {
    // 920----------------------------------------------------------------------
    const mediaQuery920_5 = window.matchMedia("(max-width: 920px)");
    const hendelMediaQuery920_5 = (e) => {
      if (e.matches) {
        getElemQ("main .container").style.width = "100%";
        getElemQ("main .container").style.height = "70vh";
        allbuttons.forEach((b) => (b.style.fontSize = "5vw"));
        allbuttons.forEach((b) => (b.style.width = "20%"));
        allbuttons.forEach((b) => (b.style.height = "20%"));
      } else {
        getElemQ("main .container").style.width = "55vw";
        getElemQ("main .container").style.height = "55vw";
        allbuttons.forEach((b) => (b.style.fontSize = "10vw")); // 10vw instead of 8vw
        allbuttons.forEach((b) => (b.style.width = "20%"));
        allbuttons.forEach((b) => (b.style.height = "20%"));
      }
    };
    mediaQuery920_5.addListener(hendelMediaQuery920_5);
    hendelMediaQuery920_5(mediaQuery920_5);

    // 700----------------------------------------------------------------------
    const mediaQuery700_5 = window.matchMedia("(max-width: 700px)");
    const hendelMediaQuery700_5 = (e) => {
      if (e.matches) {
        allbuttons.forEach((b) => (b.style.fontSize = "15vw"));
      } else {
        allbuttons.forEach((b) => (b.style.fontSize = "3vw"));
      }
    };
    mediaQuery700_5.addListener(hendelMediaQuery700_5);
    hendelMediaQuery700_5(mediaQuery700_5);
  }
  if (bordSize == 7) {
    // 920----------------------------------------------------------------------
    const mediaQuery920_7 = window.matchMedia("(max-width: 920px)");
    const hendelMediaQuery920_7 = (e) => {
      allbuttons.forEach((b) => (b.style.width = "14.28%"));
      allbuttons.forEach((b) => (b.style.height = "14.28%"));
      if (e.matches) {
        getElemQ("main .container").style.width = "100%";
        getElemQ("main .container").style.height = "70vh";
        allbuttons.forEach((b) => (b.style.fontSize = "5vw"));

      } else {
        getElemQ("main .container").style.width = "100vw";
        getElemQ("main .container").style.height = "100vw";
        allbuttons.forEach((b) => (b.style.fontSize = "5vw")); // 10vw instead of 8vw

      }
    };
    mediaQuery920_7.addListener(hendelMediaQuery920_7);
    hendelMediaQuery920_7(mediaQuery920_7);

    // 700----------------------------------------------------------------------
    const mediaQuery700_5 = window.matchMedia("(max-width: 700px)");
    const hendelMediaQuery700_5 = (e) => {
      if (e.matches) {
        allbuttons.forEach((b) => (b.style.fontSize = "15vw"));
      } else {
        allbuttons.forEach((b) => (b.style.fontSize = "3vw"));
      }
    };
    mediaQuery700_5.addListener(hendelMediaQuery700_5);
    hendelMediaQuery700_5(mediaQuery700_5);
  }
});
}
// ------------------game and win functions---------------
function gameClick2(e) {
  
  button = e.target;
  buttonId = Number(button.id.slice(1, 2)) - 1;
  buttonId2 = Number(button.id.slice(3)) - 1;
  if (button.innerText == "") {
    changePlayer();
    stepsCunter++;
    arrAll[buttonId][buttonId2] = player.val;
    button.innerText = player.val;
    player.position.push([buttonId+1,buttonId2+1])
  }
  
  checkWin2(player);
  if (stepsCunter>arrAll.length*arrAll.length -1){
    setTimeout(() => {
      alert("no winner - draw")
      restart();
    }, 300);
  }
  oSpan.innerText = playerO.record;
  xSpan.innerText = playerX.record;
}
function checkWin2(Cplayer) {
  let row = 0;
  let coll = 0;
  let cunetrR = arrAll.length - 1;
  let cunetrL = 0;
  for (i of arrAll[buttonId]) {
    if (i == Cplayer.val) {
      row++;
    }
  }
  for (i of arrAll) {
    if (i[buttonId2] == Cplayer.val) {
      coll++;
    }
    if (i[cunetrR] == Cplayer.val) {
      cunetrR--;
    }
    if (i[cunetrL] == Cplayer.val) {
      cunetrL++;
    }
  }
  if (
    row >= arrAll.length ||
    coll >= arrAll.length ||
    cunetrL >= arrAll.length ||
    cunetrR < 0
  ) {
    recordArr.push(stepsCunter);
    localStorage.setItem("record", JSON.stringify(recordArr));
    player.record++;
    stepsCunter = 0;
    allbuttons.map((b) => {
      let id = Number(button.id.slice(1, 2));
      if (b.innerText == Cplayer.val) {
        b.style.color = "red";
      }
    });
    setTimeout(() => {
      alert(player.val + " win");
      restart();
    }, 300);
  }
}

// nav butoons ------------------------------------------------------nav butoons 
// functions-----------------------------------functions
// --------------------restart---------
function restart() {
  arrAll = [];
  for (let i = 0; i < bordSize; i++) {
    arrAll.push([]);
  }
  player = playerO;
  allbuttons.forEach(b=>b.innerText="" )
  classA.forEach(b=>b.style.color="white")
  classB.forEach(b=>b.style.color="black")

}
// ---------------------undo------------------
function undo() {
  let position=player.position.pop();
  let p1 = position[0]
  let p2 = position[1]
  arrAll[p1-1][p2-1]=undefined
  getELM(`b${p1}-${p2}`).innerHTML=""
  changePlayer();
  if(stepsCunter>0){stepsCunter--}

}
// --------------clear Local Storage----------
function clearLs() {
  localStorage.clear();
  spanRecord.innerText = "";
  playerO.position = [];
  playerX.position = [];
  recordArr=[]
}
// ---------------------record----------------
function recordFun() {
  spanRecord.innerText = Math.min(
    ...JSON.parse(localStorage.getItem("record"))
  );
}
// ----------------------save-----------------
function saveFun() {
  localStorage.setItem("winArr", JSON.stringify(arrAll));
  localStorage.setItem("steps", JSON.stringify(stepsCunter));
  localStorage.setItem("player", JSON.stringify(player));
  localStorage.setItem("positionX", JSON.stringify(playerX.position));
  localStorage.setItem("positionO", JSON.stringify(playerO.position));
  localStorage.setItem("recordX", JSON.stringify(playerX.record));
  localStorage.setItem("recordO", JSON.stringify(playerO.record));
}
// ---------------------reload----------------
function relodFun() {
  // variables
  let posX = JSON.parse(localStorage.getItem("positionX"));
  let posO = JSON.parse(localStorage.getItem("positionO"));
  let recX = JSON.parse(localStorage.getItem("recordX"));
  let recO = JSON.parse(localStorage.getItem("recordO"));
  let arr = JSON.parse(localStorage.getItem("winArr"));
  let pla = JSON.parse(localStorage.getItem("player"));
  let steps = JSON.parse(localStorage.getItem("steps"));
  // win arr and steps
  arrAll = arr;
  stepsCunter = steps;
  // buttons inner
  allbuttons.forEach(b=>b.innerText="")
  for (i=0;i<arrAll.length;i++) {
    for (j=0;j<arrAll[i].length;j++){
      getELM(`b${i+1}-${j+1}`).innerText=arrAll[i][j]
    }
  }
  // players seting
  player = pla;
  playerO.position=posO
  playerX.position=posX
  playerO.record=recO
  playerX.record=recX
  oSpan.innerText = playerO.record;
  xSpan.innerText = playerX.record;
  changePlayer(player)
  
}
// buttons seting-----------------------------------------buttons seting
restartButton.onclick = () => restart();
undoButton.onclick = () => undo();
recordButton.onclick = recordFun;
saveButton.onclick = saveFun;
relodButton.onclick = relodFun
clearBtutton.onclick = clearLs;


// general functions----------------------------------------------------------general functions
function changePlayer() {
  if (player == playerO) {
    player = playerX;
  } else {
    player = playerO;
  }
}
function appendTo(element, appendTO) {
  getElemQ(appendTO).append(element);
}
function getElemQ(selctor) {
  return document.querySelector(selctor);
}
function getELM(id) {
  return document.getElementById(id);
}
function crateELM(
  elementName,
  elementClass = "",
  elementId = "",
  innerHTML = ""
) {
  let e = document.createElement(elementName);
  e.className = elementClass;
  e.id = elementId;
  e.innerHTML = innerHTML;
  return e;
}
// span record seting----------------------------------------------span record seting
oSpan.innerText = playerO.record;
xSpan.innerText = playerX.record;

