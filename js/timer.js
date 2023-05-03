window.onload=start
let secends=0
let minuts=0
let overs=0
let timer;
let secendSpan = document.getElementById("secense")
let minuteSpan = document.getElementById("minute")
let overSpan = document.getElementById("over")

document.getElementById("startbtu").onclick=start
document.getElementById("stopbtu").onclick=stop

function start (){
        stop()
        timer = setInterval(()=>{
            secends++
            if (secends<10){
                secendSpan.innerText=`0${secends}`
            }
            else if (secends>59){
                secends=1
                secendSpan.innerText=`0${secends}`
                minuts++
            }
            else{secendSpan.innerText=secends}

            if (minuts<10){
                minuteSpan.innerText=`0${minuts}`
            }
            else if (minuts>59){
                minuts=1
                minuteSpan.innerText=`0${minuts}`
                overs++
            }
            else{minuteSpan.innerText=minuts}

            if (overs<10){
                overSpan.innerText=`0${overs}`
            }
            else{overSpan.innerText=overs}
    },1000)
}
function stop () {
    clearTimeout(timer)
}
