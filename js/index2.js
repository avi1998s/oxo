// מערך אפשריות ניצחון
let winArr = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [3,5,7],[1,5,9]
];
// משתנים גלובלים
let playerX={val:"X",record:0,position:[]}
let playerO={val:"O",record:0,position:[]}
let player=playerO;
let stepsCunter = 0
let recordArr= []
// ---------------------------------------------------
// פיתרון עם מערך 1
let arrAll=[[],[],[]]

allbuttons.forEach(i=>{
    i.addEventListener("click",gameClick2)
})

// הגדרות
restartButton.onclick=()=>restart()
undoButton.onclick=()=>undo()
recordButton.onclick=recordFun
saveButton.onclick=saveFun
relodButton.onclick=relodFun
clearBtutton.onclick=clearLs

oSpan.innerText=playerO.record
xSpan.innerText=playerX.record


