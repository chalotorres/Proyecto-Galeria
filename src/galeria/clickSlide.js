// Se importan las fotos de la "base de datos"
import datos from './../datos/fotos';

import { cargarImagen } from './cargarImagen';

const clickSlide = (e) => {
    let ruta, nombre, descripcion;
    
    // Se obtiene el id de la imagen a la que se le dio click del slide
    const id = e.target.dataset.id;
    
    // Se obtiene el elemento con tiene la clase 'galeria'
    const galeria = document.getElementById('galeria');
    
    // Se obtiene la categoría de la imagen a la que se le dio click del slide
    const categoriaActiva = galeria.dataset.categoria;

    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id == id) {
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });

    cargarImagen(id, nombre, ruta, descripcion);
}

export default clickSlide;