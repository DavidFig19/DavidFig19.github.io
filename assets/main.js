// inicializar aos
AOS.init();

const btnMenu = document.querySelector('.btn-menu');
const btnicon = document.querySelector('.btn-menu i');
const menu = document.getElementById('navMenu');
//boton verde de inicio
const btnInicio = document.getElementById("hacercaHome");
btnMenu.addEventListener('click', () => {

    menu.classList.toggle('navbar-menu__active')
    btnicon.classList.toggle('fa-xmark');

});


//para el slide
const progress = document.querySelector('.progreso div');
const inicio = document.getElementById("inicio");
const acerca = document.getElementById("acerca");
const exp = document.getElementById("experiencia");
const pro = document.getElementById("proyectos");
const contac = document.getElementById("contacto");
const links = document.querySelectorAll('.header-desktop ul li a');
const movilNav=document.querySelectorAll('#navMenu ul li a');
links.forEach(link => {

    link.addEventListener('click', activeAncla);
});
movilNav.forEach(element => {
    element.addEventListener("click",activeAncla);
});
btnInicio.addEventListener('click', activeAncla);

function activeAncla(e) {
    console.log(e)
    e.preventDefault();
    const href = this.getAttribute("href"); //aprovechamos le href para hacer seleccion de esa seccion con el id #id
    const offsetTop = document.querySelector(href).offsetTop; //seleccionamos la seeccion que tiene el mismo id que el href


    scroll({
        top: offsetTop,
        behavior: "smooth"
    })

    //rellenar barra dependiendo de la seccion a la que se dirija
    switch (href.getAttribute("data-value")) {
        case "inicio":
            progress.setAttribute("style", "width:0%;");

            break;
        case "acerca":
            progress.setAttribute("style", "width:25%;")
            break;
        case "experiencia":
            progress.setAttribute("style", "width:50%;")
            break;
        case "proyectos":
            progress.setAttribute("style", "width:75%;")
            break;
        case "contacto":
            progress.setAttribute("style", "width:100%;")
            break;
       

    }
}

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    console.log(acerca.scrollHeight);
    console.log(acerca.offsetTop);
    const sectionTop = acerca.offsetTop - 85;
    if (window.scrollY > (inicio.offsetTop - 85) && window.scrollY <= (inicio.offsetTop - 85) + inicio.scrollHeight) {
        console.log('scrolled to bottom')
        progress.setAttribute("style", "width:0%;")
    }
    if (window.scrollY > sectionTop && window.scrollY <= sectionTop + acerca.scrollHeight) {
        console.log('scrolled to bottom')
        progress.setAttribute("style", "width:25%;")
    }
    if (window.scrollY > (exp.offsetTop - 85) && window.scrollY <= (exp.offsetTop - 85) + exp.scrollHeight) {
        console.log('scrolled to bottom')
        progress.setAttribute("style", "width:50%;")
    }
    if (window.scrollY > (pro.offsetTop - 85) && window.scrollY <= (pro.offsetTop - 85) + pro.scrollHeight) {
        console.log('scrolled to bottom')
        progress.setAttribute("style", "width:75%;")
    }
    if (window.scrollY > (contac.offsetTop - 85) && window.scrollY <= (contac.offsetTop - 85) + contac.scrollHeight) {
        console.log('scrolled to bottom')
        progress.setAttribute("style", "width:100%;")
    }

})