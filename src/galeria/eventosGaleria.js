// Se importa la función de cerrar galeria
import { cargarAnteriorSiguiente } from "./cargarImagen";
// Se importa la función de carousel
import carousel from "./carousel";
// Se importa la función para cerrar la galeria
import cerrarGaleria from "./cerrarGaleria";
// Se importa la función dar click en el slide
import clickSlide from "./clickSlide";

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

    // -- Slide click de carousel --
    // Si al elemento al que se le dio click tiene un dataset con valor de 'id'
    if(e.target.dataset.id) {
        // Se llama a la función de click en el slide
        clickSlide(e);
    }

    // -- Siguiente imagen
    // Si al elemento al que se le dio click tiene un dataset con valor de 'acción' igual a siguiente-imagen
    if(boton?.dataset?.accion === 'siguiente-imagen') {
        cargarAnteriorSiguiente('siguiente');
    }

    // -- Anterior imagen
    // Si al elemento al que se le dio click tiene un dataset con valor de 'acción' igual a anterior-imagen
    if(boton?.dataset?.accion === 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    }

    // -- Carousel adelante
    // Si al elemento al que se le dio click tiene un dataset con valor de 'acción' igual a siguiente-imagen
    if(boton?.dataset?.accion === 'siguiente-slide') {
        carousel('adelante');
    }

    // -- Carousel atrás
    // Si al elemento al que se le dio click tiene un dataset con valor de 'acción' igual a anterior-imagen
    if(boton?.dataset?.accion === 'anterior-slide') {
        carousel('atras');
    }
});