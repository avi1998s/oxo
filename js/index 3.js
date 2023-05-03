
// כפתורי תפריט
let restartButton = getELM("ristart");
let undoButton = getELM("undo");
let recordButton = getELM("record");
let saveButton = getELM("save");
let relodButton = getELM("relod");
// spans
let spanRecord = getELM("spanRecord")
let xSpan = getELM("Xresult");
let oSpan = getELM("Oresult");
// כל כפתורי המשחק
let allbuttons =[...document.getElementsByClassName("playBut")]
// מערך אפשריות ניצחון
let winArr = [
    // שורה
    [1,2,3],[4,5,6],[7,8,9],
    // עמודה
    [1,4,7],[2,5,8],[3,6,9],
    // אלכסונים
    [3,5,7],[1,5,9]
];
// משתנים גלובלים
let playerX_record = 0;
let playerO_record = 0;
let stepsCunter = 0;
let cunte = 3
let record = []
let stepsArrO=[];
let stepsArrX=[];
oSpan.innerText=playerO_record
xSpan.innerText=playerX_record

restartButton.onclick=restart
undoButton.onclick=()=>undoFun()
recordButton.onclick=recordFun
saveButton.onclick=saveFun
relodButton.onclick=relodFun
allbuttons.forEach(i=>{
    i.addEventListener("click",start)
})
function start (e) {
    let Button= e.target
    let ButtonId =e.target.id.slice(6)
    if (cunte%2==0&&Button.innerText==""){
        Button.innerText= "O"
        stepsArrO.push(ButtonId)
        cunte++
        stepsCunter++
    }
    else if (cunte%2!=0&&Button.innerText==""){
        Button.innerText= "X"
        stepsArrX.push(ButtonId)
        cunte++
        stepsCunter++    
    }
    for (i of winArr){
        if (stepsArrO.join().includes(i[0])&&stepsArrO.join().includes(i[1])&&stepsArrO.join().includes(i[2])){
            playerO_record++
            oSpan.innerText=playerO_record
            record.push(stepsCunter)
            let recordSet= new Set(record)
            localStorage.setItem("record",JSON.stringify([...recordSet]))
            Button.innerText= "O"
            alert("O win")
            restart()
        }
        if (stepsArrX.join().includes(i[0])&&stepsArrX.join().includes(i[1])&&stepsArrX.join().includes(i[2])){
            playerX_record++
            xSpan.innerText=playerX_record
            record.push(stepsCunter)
            let recordSet= new Set(record)
            localStorage.setItem("record",JSON.stringify([...recordSet]))
            Button.innerText= "x"
            alert("X win")
            restart()
        }
    }
    if (stepsCunter>8){
        alert("twko");
        restart()
    }
}

function getELM (id){
    return document.getElementById(id);
}
function restart(){
    allbuttons.forEach(b=>b.innerText="")
    stepsArrX=[]
    stepsArrO=[]
    stepsCunter=0
    cunte=3
}
function undoFun() {
    let p;
    cunte--
    stepsCunter--
    if (stepsArrX.length>stepsArrO.length){
        p=stepsArrX.pop()
        getELM(`button${p}`).innerText=""
    }
    else{
        p=stepsArrO.pop()
        getELM(`button${p}`).innerText=""
    }
}
function recordFun(){
    spanRecord.innerText = Math.min(...JSON.parse(localStorage.getItem("record")))
    // console.log(numbers);
}
function saveFun(){
    let xSet =new Set(stepsArrX)
    let oSet =new Set(stepsArrO)
    localStorage.setItem("xPlayerArray", JSON.stringify([...xSet]))
    localStorage.setItem("oPlayerArray", JSON.stringify([...oSet]))
}
function relodFun () {
    let x = JSON.parse(localStorage.getItem("xPlayerArray")).flat()
    let o = JSON.parse(localStorage.getItem("oPlayerArray")).flat()
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
    stepsArrO.push(o)
    stepsArrX.push(x)
    stepsCunter=x.length+o.length
    cunte=x.length+o.length+1
}

