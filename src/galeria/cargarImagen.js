// Se importa el dataset de fotos
import data from "./../datos/fotos";

// Se obtiene el elemento con tiene la clase 'galeria'
const galeria = document.getElementById('galeria');

// Función para cargar imagen
const cargarImagen = (id, nombre, ruta, descripcion) => {   
    // Se actualiza la ruta de la primer imagen
    galeria.querySelector('.galeria__imagen').src = ruta;
    // Se le pone el nombre de la foto en el front con innerText
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    // Se le agrega la descripción al pie de la imagen
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    // Se le pasa el id a la imagen pero no se muestra
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;

    // Se obitene la categoria actual que se muestra en el modal
    const categoriaActual = galeria.dataset.categoria;
    // Se obtiene el conjunto de fotos de la categoría actual
    const fotos = data.fotos[categoriaActual];
    // Variable para almacenar el index de la imagen actual dentro de la categoría actual
    let indexImagenActual;

    // Para cada fotos dentro del conjunto de fotos
    fotos.forEach((foto, index) => {
        // Si se encuentra con el mismo id
        if(foto.id == id) {
            // Se almacena el index de esa imagen
            indexImagenActual = index;
        }
    });

    // Si los slides tiene una cantidad mayor a 0
    if(galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        // Primero se elimina el contorno resaltante anterior 
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        
        // Se le agrega el contorno que resalta la imagen seleccionada
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }
};

const cargarAnteriorSiguiente = (direccion) => {
    // Variable que obtiene la categoria a la que se le dio click
    const categoriaActual = galeria.dataset.categoria;
    // Se obtiene el set de imagenes de esa categoria
    const fotos = data.fotos[categoriaActual];
    // se obtiene el id de la imagen actual
    const idImagenActual = galeria.querySelector('.galeria__imagen').dataset.idImagen;

    // Variable que obtendrá el index de la imagen
    let indexImagenActual;
    // Para cada foto del set de fotos
    fotos.forEach((foto, index) => {
        // Si el id de la foto actual del ciclo es igual al id de la foto de actual de la galeria
        if(foto.id == idImagenActual) {
            // Se actualiza el index
            indexImagenActual = index;  
        }
    });

    // Si la dirección es siguiente
    if(direccion === 'siguiente') {
        if (fotos[indexImagenActual + 1]) {
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
    // Si la dirección es anterior 
    else if (direccion === 'anterior') {
        if (fotos[indexImagenActual - 1]) {
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
}

// exportar la función cargarImagen
export { cargarImagen, cargarAnteriorSiguiente };