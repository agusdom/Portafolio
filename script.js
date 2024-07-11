let menuVisible = false;
//Función que oculta o muestra el menu
function MostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function Seleccionar(){
    //Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//Función que aplica a las animaciones de las habilidades
function EfectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("c");
        habilidades[1].classList.add("java");
        habilidades[2].classList.add("html");
        habilidades[3].classList.add("cSharp");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("proactividad");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("resilencia");
        habilidades[8].classList.add("feedback");
        habilidades[9].classList.add("solucion");
        habilidades[10].classList.add("creatividad");
    }
}
//Detecto el Scrolling  para aplicar la animación de las barras de habilidades
window.onscroll = function(){
    EfectoHabilidades();
}