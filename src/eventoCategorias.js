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
    }   
});