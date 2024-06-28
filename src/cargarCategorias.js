// Se importan los datos de la "base de datos" para las categorías
import dataCategorias from './datos/categorias';

// Se obtiene el array de categorías dentro de dataCategorías
const {categorias} = dataCategorias;

// Se obtiene el elemento que contiene el id 'categorías' el cual es el div que contiene las diversas cards
const contenedorCategorias = document.getElementById('categorias');

// para cada categoría dentro del array de categorías
categorias.forEach((categoria) => {
    // Se creará un elemento etiqueta 'a'
    const nuevaCategoria = document.createElement('a');
    
    // código html que se incrustrará a la etiqueta creada previamente
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
			<p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
        </div>
    `;
    // Se le asigna el código anterior a la etiqueta 'a' creada previamente
    nuevaCategoria.innerHTML = plantilla;

    // a la etiqueta se le agrega la clase 'categoria'
    nuevaCategoria.classList.add('categoria');
    // se le da un href a la misma página
    nuevaCategoria.href = '#';
    // se le da un atributo personalizado
    nuevaCategoria.dataset.categoria = categoria.id;

    // al contenedor de categorías se le agrega el elemento "nuevaCategoría" el cual fue creado previamente
    contenedorCategorias.append(nuevaCategoria);
});
