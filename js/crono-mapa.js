const stack = document.querySelectorAll("#mapa-1 .mapa-stack img");
const controlContainer = document.querySelector("#mapa-1 .mapa-control .dropdown-menu ul");
const responsive = [
    {breakPoint:{   width:0,    wImg:320}},
    {breakPoint:{   width:576,  wImg:480}},
    {breakPoint:{   width:768,  wImg:550}}, 
    {breakPoint:{   width:992,  wImg:350}},
    {breakPoint:{   width:1200, wImg:450}} 
];
let position = 0;

for (const item of responsive) {
    wImg = window.innerWidth > item.breakPoint.width ? item.breakPoint.wImg : wImg;  
}

document.documentElement.style.setProperty('--wimg', `${wImg}px`);

for (var i = 0; i < stack.length; i++) {
    if(i != 0){
        controlContainer.innerHTML += `<li class="list-group-item text-center" style="cursor: pointer;" onclick="goTo(${i})">${stack[i].getAttribute("date")}</li>`;
    }else{
        controlContainer.innerHTML += `<li class="list-group-item text-center active" style="cursor: pointer;" onclick="goTo(${i})">${stack[i].getAttribute("date")}</li>`;
    }
}
const control = document.querySelectorAll("#mapa-1 .mapa-control .dropdown-menu ul li");


function goTo(index){
    document.documentElement.style.setProperty('--ctl', `${index * -wImg}px`);
    position = index;
    select();
}

function next(){
    position = position + 2 > stack.length ? 0 : position + 1;
    document.documentElement.style.setProperty('--ctl', `${position * -wImg}px`);
    select();
}

function select(){
    for (const item of control) {
        item.classList.remove("active");
    }
    control[position].classList.add("active");
}


