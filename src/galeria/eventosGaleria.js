// Se importa la función de cerrar galeria
import cerrarGaleria from "./cerrarGaleria";

// Se obtiene el elemento con tiene la clase 'galeria'
const galeria = document.getElementById('galeria');

// Se agrega el evento click a la galeria
galeria.addEventListener('click', (e) => {
    // Se obtiene y almacena el boton mas cerca al elemento al que se le dio click
    const boton = e.target.closest('button');

    // si existe un botón que tiene un dataset y ese dataset tiene la propiedad 
    // accion el cual es igual a 'cerrar-galeria'?
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        // Se llama a la función cerrar galería
        cerrarGaleria();

        // Se le agrega el scrollbar que se le había quitado antes
        document.body.style.overflow = '';
    }
});