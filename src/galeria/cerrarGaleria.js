// Se obtiene el elemento con tiene la clase 'galeria'
const galeria = document.getElementById('galeria');

// Función para cerrar galeria
const cerrarGaleria = () => {
    galeria.classList.remove('galeria--active');
};

export default cerrarGaleria;