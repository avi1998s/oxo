let buttons = [...document.getElementsByTagName("button")];
let a = document.getElementById("a1");
let prev = document.getElementById("prev_but")
let next = document.getElementById("next_but")
let cunter= 0
let falag
let arr = [
    {name:"lions",url:"https://en.wikipedia.org/wiki/Lion"},
    {name:"eagles",url:"https://en.wikipedia.org/wiki/eagle"},
    {name:"tigers",url:"https://en.wikipedia.org/wiki/tiger"},
    {name:"snow bears",url:"https://en.wikipedia.org/wiki/Polar_bear"},
    {name:"sharks",url:"https://en.wikipedia.org/wiki/shark"},
];
a.href=arr[cunter].url;
a.innerText="mor about " + arr[cunter].name;

prev.ondblclick=()=>{
    cunter++
    a.href=arr[cunter].url
    a.innerText="mor about " + arr[cunter].name
}
prev.onclick=()=>{
    if (cunter<=0){
        cunter=4
    }
    else{cunter--}
    a.href=arr[cunter].url
    a.innerText="mor about " + arr[cunter].name  
}
next.ondblclick=()=>{
    cunter--
    a.href=arr[cunter].url
    a.innerText="mor about " + arr[cunter].name
}
next.onclick=()=>{
    if (cunter>=4){
        cunter=0
    }
    else{cunter++}
    a.href=arr[cunter].url
    a.innerText="mor about " + arr[cunter].name
}


buttons.forEach(i=>{
    if (i.ariaLabel=="Slide 1"){
        i.onclick=()=>{
            a.href="https://en.wikipedia.org/wiki/Lion"
            a.innerText="mor about lions"
            cunter=0
        }
    }
    if (i.ariaLabel=="Slide 2"){
        i.onclick=()=>{
            a.href="https://en.wikipedia.org/wiki/eagle"
            a.innerText="mor about eagles"
            cunter=1
        }
    }
    if (i.ariaLabel=="Slide 3"){
        i.onclick=()=>{
            a.href="https://en.wikipedia.org/wiki/tiger"
            a.innerText="mor about tigers"
            cunter=2
        }
    }
    if (i.ariaLabel=="Slide 4"){
        i.onclick=()=>{
            a.href="https://en.wikipedia.org/wiki/Polar_bear"
            a.innerText="mor about snow bears "
            cunter=3
        }
    }
    if (i.ariaLabel=="Slide 5"){
        i.onclick=()=>{
            a.href="https://en.wikipedia.org/wiki/shark"
            a.innerText="mor about sharks"
            cunter=4
        }
    }
})
