function appendTo (element,appendTO) {
    getElemQ(appendTO).append(element)
}
function getElemQ(selctor){
    return document.querySelector(selctor);
}
function crateELM (elementName,elementClass="",elementId="",innerHTML=""){
    let e = document.createElement(elementName);
    e.className =elementClass
    e.id=elementId
    e.innerHTML=innerHTML
    return e
}
let body = getElemQ("body"),hed = getElemQ(".hed"),main = getElemQ("#main");
// דיבים ראשים
appendTo(crateELM("div","hed container-fluid center","a1"),"body"),appendTo(crateELM("main","a","main"),"body"),appendTo(crateELM("footer","container-fluid"),"body")
// דיבים מישנה הד
appendTo(crateELM("div","center","result"),".hed")
appendTo(crateELM("nav","container center"),".hed")
appendTo(crateELM("div","timer container center"),".hed")
// ניקוד
appendTo(crateELM("div","","result2","O pleyer = "),"#result")
appendTo(crateELM("div","","result1","X pleyer = "),"#result")
// ספאנים של ניצחונות שחקנים
appendTo(crateELM("span","","Oresult"),"#result1"),appendTo(crateELM("span","","Xresult"),"#result2")
// כפתורי תפריט
appendTo(crateELM("button","","ristart","<b>new game</b>"),".hed nav")
appendTo(crateELM("button","","undo","<b>undo</b>"),".hed nav")
appendTo(crateELM("button","","record","<b>record:</b>"),".hed nav")
appendTo(crateELM("button","","save","<b>save</b>"),".hed nav")
appendTo(crateELM("button","","relod","<b>relod</b>"),".hed nav")
appendTo(crateELM("button","","clear","<b>clear</b>"),".hed nav")
appendTo(crateELM("span","","spanRecord",""),"#record b")
// טיימר
appendTo(crateELM("div","","",""),".timer")
appendTo(crateELM("span","","over","00"),".timer div")
appendTo(":",".timer div")
appendTo(crateELM("span","","minute","00"),".timer div")
appendTo(":",".timer div")
appendTo(crateELM("span","","secense","00"),".timer div")
appendTo(crateELM("button","","startbtu","start"),".timer")
appendTo(crateELM("button","","stopbtu","stop"),".timer")
// -------------------------------------------------------------------------

// דיבים ראשיים מאין
appendTo(crateELM("div","container-floyd center",""),"main"),appendTo(crateELM("div","container"),"#main > div")
// כפתורי משחק

for (i=1;i<4;i++){
    for (j=1;j<4;j++){
        appendTo(crateELM("button","playBut center",`b${i}-${j}`),"#main .container")
    }
}
// for (i=1;i<10;i++){
//     appendTo(crateELM("button","playBut center",`button${i}`),"#main .container")
// }   
// -----------------------------------------------------------------------------------------------------------------

