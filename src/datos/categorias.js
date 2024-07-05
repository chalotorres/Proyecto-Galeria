import data from './fotos';
const { fotos } = data;

export default {
	categorias: [        
        {
			id: 'web',
			nombre: 'Diseño - Web',
			numeroFotos: fotos['web'].length,
			imagenPortada: './img/web.png',
		},
        {
			id: 'mobile',
			nombre: 'Diseño - Mobile',
			numeroFotos: fotos['mobile'].length,
			imagenPortada: './img/mobile.png',
		},
        {
			id: 'cine',
			nombre: 'Análisis',
			numeroFotos: fotos['cine'].length,
			imagenPortada: './img/cine.png',
		},
        {
			id: 'edicion',
			nombre: 'Edición',
			numeroFotos: fotos['edicion'].length,
			imagenPortada: './img/edicion.png',
		},  
        {
			id: 'ilustracion',
			nombre: 'Ilustración',
			numeroFotos: fotos['ilustracion'].length,
			imagenPortada: './img/ilustracion.png',
		},
        {
			id: 'proyecto',
			nombre: 'Proyecto Móvil',
			numeroFotos: fotos['proyecto'].length,
			imagenPortada: './img/proyecto.png',
		},
        {
			id: 'tarea',
			nombre: 'Tarea Móvil',
			numeroFotos: fotos['tarea'].length,
			imagenPortada: './img/tarea.png',
		},
	],
};