// Se importan las fotos de la "base de datos"
import dataFotos from './datos/fotos';
// Se importa la función para cargar la Imagen incial
import { cargarImagen } from './galeria/cargarImagen';

// Obtiene el elemento con id 'categorias' que son las cards
const contenedorCategorias = document.getElementById('categorias');

// Obtiene el elemento con id 'galeria' que es el modal que contiene las imágenes de cada categoria
const galeria = document.getElementById('galeria');

// Se le agrega un evento al contenedor de Categorías, con un click
contenedorCategorias.addEventListener('click', (e) => {
    // Evita el href = '#' que hace que la página suba cuando se le hace click
    e.preventDefault();
    
    // si el elemento mas cerca al que se le hizo click dentro del contenedor de categorías es una etiqueta 'a'
    if(e.target.closest('a')) {
        // al elemento galería se le agrega la clase 'galeria--active' que lo muestra en pantalla
        galeria.classList.add('galeria--active');
        // evita que salga el scrollbar dentro del modal de la galería
        document.body.style.overflow = 'hidden';
        
        // Se obtiene la categoría exacta a la que se le dio click
        const categoriaActiva = e.target.closest('a').dataset.categoria;
        // Se obtiene la lista de fotos de la categoría a la que se le dio click
        const fotos = dataFotos.fotos[categoriaActiva];
        // Se obtiene el carousel
        const carousel = galeria.querySelector('.galeria__carousel-slides');
        
        // Se obtiene los datos de las primer foto según la categoría a la que se le dió click
        const { id, nombre, ruta, descripcion } = fotos[0];
        // // Se llama a la función para cargar la imagen
		cargarImagen(id, nombre, ruta, descripcion);


        // Se limpia todo el contenido para no sobrecargarlo de imagenes
        carousel.innerHTML = '';

        fotos.forEach((foto) => {
            // Se crea el slide plantilla de la foto que contiene el código html
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
                </a>
            `;
            // Se agrega a al elemento que contiene la clase "galeria__carousel-slides" el código anterior
            // por cada elemento dentro de 'fotos'
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        // Se le agrega la clase 'galeria__carousel-slides--active' el cual agrega un borde a la imagen seleccionada
        // dentro del carousel
        galeria.querySelector('.galeria__carousel-slides').classList.add('galeria__carousel-slides--active');
    }   
});