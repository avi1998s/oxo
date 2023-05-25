function appendTo(element, appendTO) {
    getELM(appendTO).append(element);
}
function getELM(id) {
  return document.getElementById(id);
}
function randomW(arr){
    return arr[Math.floor(Math.random() * arr.length) ]
}
function addCarts (){
    for (i=0;i<randomChoice.length;i++){
        resultOfGuessing.innerText+=i
    }
}
let arrayWords = ["banana","kiwy","pinapple","orenge","guiava","apple"];
let arrH4 =[]
let resultOfGuessing = getELM("result")
let guessH4 = getELM("guessH4")
let keyword = [...document.getElementsByClassName("keywordB")]
let resetBtu = getELM("resetB")
let randomChoice =randomW(arrayWords)
addCarts()

console.log(randomChoice);
function gameClick(e){
    let buttonInner = e.target.innerText
    if(!arrH4.includes(buttonInner)){
        arrH4.push(buttonInner)
    }
    guessH4.innerText=arrH4
    for (i=0;i<randomChoice.length;i++){
        if (buttonInner==randomChoice[i]){
            resultOfGuessing.innerText[i]=randomChoice[i]
            console.log(resultOfGuessing.innerText[i])
        }
    }
    
}



resetBtu.onclick =()=>{randomChoice =randomW(arrayWords)}
keyword.forEach(b=>b.addEventListener("click",gameClick))