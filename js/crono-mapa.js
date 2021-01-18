const stack = document.querySelectorAll("#map-1 .map-stack img");
const controlContainer = document.querySelector("#map-1 .map-control .dropdown-menu ul");

/*Establece el ancho de la imagen en base al tamaño de la pantalla*/
const responsive = [
    {breakPoint:{   width:0,    wImg:336}},
    {breakPoint:{   width:576,  wImg:480}},
    {breakPoint:{   width:768,  wImg:550}}, 
    {breakPoint:{   width:992,  wImg:350}},
    {breakPoint:{   width:1200, wImg:450}} 
];
let position = 0;

/*Detecta la resolución y establece el tamaño de la imagen en base a lo estableceido previamente*/
for (const item of responsive) {
    wImg = window.innerWidth > item.breakPoint.width ? item.breakPoint.wImg : wImg;  
}
document.documentElement.style.setProperty('--wimg', `${wImg}px`);

/*Genera los controles basado en el numero de elementos*/
for (var i = 0; i < stack.length; i++) {
    if(i != 0){
        controlContainer.innerHTML += `<li class="list-group-item text-center list-group-item-action" style="cursor: pointer;" onclick="goTo(${i})">${stack[i].getAttribute("date")}</li>`;
    }else{
        controlContainer.innerHTML += `<li class="list-group-item text-center active list-group-item-action" style="cursor: pointer;" onclick="goTo(${i})">${stack[i].getAttribute("date")}</li>`;
    }
}
const control = document.querySelectorAll("#map-1 .map-control .dropdown-menu ul li");

/*Posiciona el mapa en un indice en especifico*/
function goTo(index){
    document.documentElement.style.setProperty('--ctl', `${index * -wImg}px`);
    position = index;
    select();
}

/*Aumenta el indice en la posicion actual mas 1*/
function next(){
    position = position + 2 > stack.length ? 0 : position + 1;
    document.documentElement.style.setProperty('--ctl', `${position * -wImg}px`);
    select();
}

/*Resalta la posicion actual en los controles*/
function select(){
    for (const item of control) {
        item.classList.remove("active");
    }
    control[position].classList.add("active");
}


