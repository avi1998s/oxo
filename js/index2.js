// // ניצחון שורה
// let winArr1 = [[1,2,3],[4,5,6],[7,8,9],[3,2,1],[6,5,4],[9,8,7],[2,1,3],[5,4,6],[8,7,9],[2,3,1],[5,6,4],[8,9,7]]
//     // ניצחון עמודה
// let winArr2 =[[1,4,7],[2,5,8],[3,6,9],[7,4,1],[8,5,2],[9,6,3],[4,1,7],[5,2,8],[6,3,9],[4,7,1],[5,8,2],[6,9,3]]
//     // ניצחון אלחסון
// let winArr3 =[[3,5,7],[1,5,9],[7,5,3],[9,5,1],[5,3,7],[5,1,9],[5,7,3],[5,9,1]]


// console.log("שורה");
// // שורה
// let row = [[1,2,3],[4,5,6],[7,8,9]]
// let rowRevers = row.concat().reverse()
// console.log(row);
// console.log(rowRevers);
// console.log(row[0].reduce((o,t)=>t-o,5)==0);
// console.log(row[1].reduce((o,t)=>t-o,5)==0);
// console.log(row[2].reduce((o,t)=>t-o,5)==0);
// console.log(rowRevers[0].reduce((t,o)=>o-t,5)==0);
// console.log(rowRevers[1].reduce((t,o)=>o-t,5)==0);
// console.log(rowRevers[2].reduce((t,o)=>o-t,5)==0);



// // עמודה
// console.log("");
// console.log("עמודה");
// let cul =[9,6,3,8,5,2,7,4,1]
// let culRevers = cul.concat().reverse()
// console.log(cul);
// console.log(culRevers);
// console.log(cul.reduce((o,t)=>t-o,5)==0);
// console.log(culRevers.reduce((o,t)=>t-o,5)==0); 
// // אלכסון ימין
// console.log("");
// console.log("אלכסון ימין");
// let right =[3,5,7]
// let rightRevers = right.concat().reverse()
// console.log(right);
// console.log(rightRevers);
// console.log(right.reduce((o,t)=>t-o,5)==0);
// console.log(rightRevers.reduce((o,t)=>t-o,5)==0); 
// // אלכסון שמאל
// console.log("");
// console.log("אלכסון שמאל");
// let lef =[1,5,9]
// let lefRevers = lef.concat().reverse()
// console.log(lef);
// console.log(lefRevers);
// console.log(lef.reduce((o,t)=>t-o,5)==0);
// console.log(lefRevers.reduce((o,t)=>t-o,5)==0);



// let rrr =0

// // בדיקה אם מערך מסויים מכיל רצף מספרים
// let a =[[1,2,3],[4,5,6],[7,8,9]]
// let b =[1,2,3,4,5,6,7,8,9].join()
// console.log(b.includes(a[1].join()));

function appendTo (element,appendTO) {
    getELM(appendTO).append(element)
}
function getELM (selctor){
    return document.querySelector(selctor);
}
function crateELM (elementName,elementClass,elementId){
    id =""
    let e = document.createElement(elementName);
    e.className =elementClass
    e.id=elementId
    return e
}
let body = getELM("body")
let hed = getELM(".hed")
let main = getELM("#main")

// דיבים ראשים
appendTo(crateELM("div","hed container-fluid center","a1"),"body")
appendTo(crateELM("main","a","main"),"body")
appendTo(crateELM("footer","container-fluid"),"body")
// דיבים מישנה הד
appendTo(crateELM("div","center","result"),".hed")
appendTo(crateELM("nav","container center"),".hed")
appendTo(crateELM("div","timer container center"),".hed")
// תפריט
appendTo(crateELM("div"),"#result")
appendTo(crateELM("div"),"#result")
getELM("#result")
appendTo(crateELM("span","","Xresult"),"#Xresult")
appendTo(crateELM("span","","Oresult"),"#Oresult")





// דיבים ראשיים מאין
appendTo(crateELM("div","container-floyd center"),"main")
appendTo(crateELM("div","container"),"#main > div")
for (i=1;i<10;i++){
    appendTo(crateELM("button","playBut center",`button${i}`),"#main .container")
}

















