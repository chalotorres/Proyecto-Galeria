// Se obtiene el elemento galeria
const galeria = document.getElementById('galeria');

// Función de carousel
const carousel = (direccion) => {
    // Parámetros que queremos que tenga el observer 
    const opciones = {
        // La raíz donde empezará a observar será el elemento con la clase galeria__carousel
        root: document.querySelector('.galeria__carousel'),
        // un margen de 0px
        rootMargin: '0px',
        // solo si el 90% es observado
        threshold: 0.9,
    };

    // La variable observador del viewport
    const observer = new IntersectionObserver((entradas) => {
        // Arreglo de slides visibles dentro de entradas
        const slidesVisibles = entradas.filter((entrada) => {
            // Si la entrada n es verdadera (si está observada)
            if(entrada.isIntersecting === true) {
                // returna esa entrada a la lista
                return entrada;
            }
        });
        
        // Si se oprimió para atrás
        if(direccion === 'atras') {
            // Se obtiene el primer slide visible del carousel
            const primerSlideVisible = slidesVisibles[0];
            // Se obtiene el index del ultimo slide visible
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            // Si la cantidad de enrtadas que hay menos uno es mayor que el ultimo slide visible
            if(indexPrimerSlideVisible >= 1) {
                // Se hace un scroll con la función scrollIntoView
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    // transición suave
                    behavior: 'smooth',
                    // El primer elemento lo pone al final
                    inline: 'end',  
                });
            }
        }
        // Si se oprimió para adelante 
        else if (direccion === 'adelante') {
            // Se obtiene el ultimo slide visible
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            // Se obtiene el index del ultimo slide visible
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);

            // Si la cantidad de enrtadas que hay menos uno es mayor que el ultimo slide visible
            if(entradas.length - 1 > indexUltimoSlideVisible) {
                // Se hace un scroll con la función scrollIntoView
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    // transición suave
                    behavior: 'smooth',
                    // El último elemento lo pone al inicio
                    inline: 'start',
                });
            }
        }

        // Se obtiene la listas de elementos de slides
        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        // Para cada slide
        slides.forEach((slide) => {
            // el elemento observer observará las slide
            observer.unobserve(slide);
        });
    }, opciones);
    
    // Se obtiene la listas de elementos de slides
    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    // Para cada slide
    slides.forEach((slide) => {
        // el elemento observer observará las slide
        observer.observe(slide);
    });
};

// Se exporta la función
export default carousel;