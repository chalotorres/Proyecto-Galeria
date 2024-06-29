// Se importan las fotos de la "base de datos"
import datos from './../datos/fotos';

import { cargarImagen } from './cargarImagen';

const clickSlide = (e) => {
    // Variables de datos para la foto que se le da click 
    let ruta, nombre, descripcion;
    
    // Se obtiene el id de la imagen a la que se le dio click del slide
    const id = e.target.dataset.id;
    
    // Se obtiene el elemento con tiene la clase 'galeria'
    const galeria = document.getElementById('galeria');
    
    // Se obtiene la categoría de la imagen a la que se le dio click del slide
    const categoriaActiva = galeria.dataset.categoria;

    // Se busca dentro de todas las imganes dentro de la categoría activa
    datos.fotos[categoriaActiva].forEach((foto) => {
        // Si encuentra la foto con el mismo id que la foto a la que se le dio click
        if(foto.id == id) {
            // Se guardan todos los datos
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    // Se carga la imagen a la que se le dio click
    cargarImagen(id, nombre, ruta, descripcion);
}

export default clickSlide;