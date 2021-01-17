const   target = document.getElementById('menu-rapido'),
        btnArriba = document.getElementById('accion-subir'),
        hold = 0.50;

/* <Hace scroll a elemento en concreto> */
function ir(id){
    let element = document.getElementById(id);
    element.scrollIntoView({block: "start", behavior: "smooth"});
}
/* </Hace scroll a elemento en concreto> */

/* <Observa si el elemento ya no es visible en el viewport> */
const observer = new IntersectionObserver(interseccion, {
    rootMargin: "-70px 0px 0px 0px",
    threshold: hold
});
observer.observe(target);
/* </Observa si el elemento ya no es visible en el viewport> */

/* <Oculta o mustra el boton de accion en fincion del menu rapido> */
function interseccion(events){
    let event = events[0];
    let visible = event.intersectionRatio >= hold;
    if(visible){
        btnArriba.removeEventListener('click', irArriba);
        btnArriba.classList.add('oculto');
    }else{
        btnArriba.addEventListener('click', irArriba);
        btnArriba.classList.remove('oculto');
    }
}
/* </Oculta o mustra el boton de accion en fincion del menu rapido> */

function irArriba(){
    target.scrollIntoView({block: "end", behavior: "smooth"});
}


