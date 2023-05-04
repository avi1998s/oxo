
let restartButton = getELM("ristart");
let undoButton = getELM("undo");
let recordButton = getELM("record");
let saveButton = getELM("save");
let relodButton = getELM("relod");
let clearBtutton =getELM("clear")
// spans
let spanRecord = getELM("spanRecord")
let xSpan = getELM("Xresult");
let oSpan = getELM("Oresult");

// כל כפתורי המשחק
let allbuttons =[...document.getElementsByClassName("playBut")]
// --------------------------------------------------------------------------


function getELM (id){
    return document.getElementById(id);
}
function gameClick(e){
    button = e.target
    buttonId =Number(button.id.slice(6)) 
    button.style.color="white"
    if (button.innerText==""){
        stepsCunter++
        changePlayer()
        player.position.push(buttonId)
        arrAll.push(buttonId)
        button.innerText=player.val
    }
    checkWin(player)
    oSpan.innerText=playerO.record
    xSpan.innerText=playerX.record
}
function checkWin (_pla){
    for (i of winArr){
        if(i.includes(buttonId)){
            if (_pla.position.includes(i[0])&&_pla.position.includes(i[1])&&_pla.position.includes(i[2])){
                player.record++
                recordArr.push(stepsCunter)
                localStorage.setItem("record",JSON.stringify(recordArr))
                stepsCunter=0
                allbuttons.map(b=>{
                    let id =Number(b.id.slice(6))
                    if(i.includes(id)&&i.includes(id)&&i.includes(id)){
                        b.style.color="red"
                    }
                })
                setTimeout(()=>{
                    alert(player.val+" win")    
                    restart()
                },300)
            }
        }
    }
}
function checkWin2 (Cplayer) {
    if (arrAll[buttonId-1]==buttonId){
        console.log(arrAll);
    }
}
function restart (){
    playerX.position=[]
    playerO.position=[]
    player=playerO
    allbuttons.forEach(b=>b.innerText="")
}

function changePlayer () {
    if (player==playerO){
        player=playerX
    }
    else{player=playerO}
}

function undo () {
    let a = player.position.pop()
    stepsCunter--
    changePlayer()
    allbuttons.map(b=>{
        if(b.id==`button${a}`){
            b.innerText=""
        }
    })
}
function recordFun(){
    spanRecord.innerText = Math.min(...JSON.parse(localStorage.getItem("record")))
}
// שמירה וטעינה
function saveFun(){
    localStorage.removeItem("xPlayer")
    localStorage.removeItem("oPlayer")
    let xSet =new Set(playerX.position)
    let oSet =new Set(playerO.position)
    localStorage.setItem("xPlayer", JSON.stringify([...xSet]))
    localStorage.setItem("oPlayer", JSON.stringify([...oSet]))
    localStorage.setItem("steps", JSON.stringify(stepsCunter))
    localStorage.setItem("player", JSON.stringify(player))
}
function relodFun () {
    allbuttons.forEach(b=>b.style.color="white")
    allbuttons.forEach(b=>b.innerText="")
    let x = JSON.parse(localStorage.getItem("xPlayer"))
    let o = JSON.parse(localStorage.getItem("oPlayer"))
    let p = JSON.parse(localStorage.getItem("player"))
    let steps = JSON.parse(localStorage.getItem("steps"))
    player!=p
    for (i of x){
        allbuttons.forEach(b=>{
            if (b.id==`button${i}`){
                b.innerText="X"
            }
        })
    }
    for (i of o){
        allbuttons.forEach(b=>{
            if (b.id==`button${i}`){
                b.innerText="O"
            }
        })
    }
    playerO.position=o
    playerX.position=x
    stepsCunter=steps
}
// 
function clearLs (){
    localStorage.clear()
    spanRecord.innerText=""
    playerO.position=[]
    playerX.position=[]
}
