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
};

export {cargarImagen};