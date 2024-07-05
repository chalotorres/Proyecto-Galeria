'use strict';

var datos = {
	fotos: {
		web: [
			{
				id: 51,
				nombre: 'Diseño de Interfaces - Web 1',
				descripcion:
					'Web 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/web/1.png',
			},
			{
				id: 52,
				nombre: 'Diseño de Interfaces - Web 2',
				descripcion:
					'Web 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/web/2.png',
			},
			{
				id: 53,
				nombre: 'Diseño de Interfaces - Web 3',
				descripcion:
					'Web 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/web/3.png',
			},
			{
				id: 54,
				nombre: 'Diseño de Interfaces - Web 4',
				descripcion:
					'Web 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/web/4.png',
			},
			{
				id: 55,
				nombre: 'Diseño de Interfaces - Web 5',
				descripcion:
					'Web 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/web/5.png',
			},
		],
		mobile: [
			{
				id: 56,
				nombre: 'Diseño de Interfaces - Mobile 1',
				descripcion:
					'Mobile 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/mobile/1.png',
			},
			{
				id: 57,
				nombre: 'Diseño de Interfaces - Mobile 2',
				descripcion:
					'Mobile 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/mobile/2.png',
			},
			{
				id: 58,
				nombre: 'Diseño de Interfaces - Mobile 3',
				descripcion:
					'Mobile 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/mobile/3.png',
			},
			{
				id: 59,
				nombre: 'Diseño de Interfaces - Mobile 4',
				descripcion:
					'Mobile 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/mobile/4.png',
			},
		],
		cine: [
			{
				id: 60,
				nombre: 'Análisis 1',
				descripcion:
					'Análisis 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/cine/1.png',
			},
			{
				id: 61,
				nombre: 'Análisis 2',
				descripcion:
					'Análisis 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/cine/2.png',
			},
			{
				id: 62,
				nombre: 'Análisis 3',
				descripcion:
					'Análisis 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/cine/3.png',
			},
			{
				id: 63,
				nombre: 'Antártida 4',
				descripcion:
					'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/4.png',
			},
			{
				id: 64,
				nombre: 'Análisis 5',
				descripcion:
					'Análisis 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/cine/5.png',
			},
			{
				id: 65,
				nombre: 'Análisis 6',
				descripcion:
					'Análisis 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/cine/6.png',
			},
			{
				id: 66,
				nombre: 'Análisis 7',
				descripcion:
					'Análisis 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/cine/7.png',
			},
		],
		edicion: [
			{
				id: 67,
				nombre: 'Edición 1',
				descripcion:
					'Edición 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/6.png',
			},
			{
				id: 68,
				nombre: 'Edición 2',
				descripcion:
					'Edición 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/7.png',
			},
			{
				id: 69,
				nombre: 'Edición 3',
				descripcion:
					'Edición 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/8.png',
			},
			{
				id: 70,
				nombre: 'Edición 4',
				descripcion:
					'Edición 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/11.png',
			},
			{
				id: 71,
				nombre: 'Edición 5',
				descripcion:
					'Edición 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/14.png',
			},
			{
				id: 72,
				nombre: 'Edición 6',
				descripcion:
					'Edición 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/15.png',
			},
			{
				id: 73,
				nombre: 'Edición 7',
				descripcion:
					'Edición 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/16.png',
			},
			{
				id: 74,
				nombre: 'Edición 8',
				descripcion:
					'Edición 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/edicion/17.png',
			},
		],		
		ilustracion: [
			{
				id: 75,
				nombre: 'Ilustración 1',
				descripcion:
					'Ilustración 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/1.png',
			},
			{
				id: 76,
				nombre: 'Ilustración 2',
				descripcion:
					'Ilustración 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/3.png',
			},
			{
				id: 77,
				nombre: 'Ilustración 3',
				descripcion:
					'Ilustración 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/lustracion/4.png',
			},
			{
				id: 78,
				nombre: 'Ilustración 4',
				descripcion:
					'Ilustración 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/5.png',
			},
			{
				id: 79,
				nombre: 'Ilustración 5',
				descripcion:
					'Ilustración 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/6.png',
			},
			{
				id: 80,
				nombre: 'Ilustración 6',
				descripcion:
					'Ilustración 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/7.png',
			},
			{
				id: 81,
				nombre: 'Ilustración 7',
				descripcion:
					'Ilustración 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/8.png',
			},
			{
				id: 82,
				nombre: 'Ilustración 8',
				descripcion:
					'Ilustración 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/9.png',
			},
			{
				id: 83,
				nombre: 'Ilustración 9',
				descripcion:
					'Ilustración 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/10.png',
			},
			{
				id: 84,
				nombre: 'Ilustración 9',
				descripcion:
					'Ilustración 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/11.png',
			},
			{
				id: 83,
				nombre: 'Ilustración 10',
				descripcion:
					'Ilustración 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/ilustracion/12.png',
			},
		],				
		proyecto: [
			{
				id: 84,
				nombre: 'Proyecto Móvil - 1',
				descripcion:
					'Proyecto Móvil 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/proyecto/1.png',
			},
			{
				id: 85,
				nombre: 'Proyecto Móvil - 2',
				descripcion:
					'Proyecto Móvil 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/proyecto/2.png',
			},
			{
				id: 86,
				nombre: 'Proyecto Móvil - 3',
				descripcion:
					'Proyecto Móvil 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/proyecto/3.png',
			},
			{
				id: 87,
				nombre: 'Proyecto Móvil - 4',
				descripcion:
					'Proyecto Móvil 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/proyecto/4.png',
			},
			{
				id: 88,
				nombre: 'Proyecto Móvil - 5',
				descripcion:
					'Proyecto Móvil 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/proyecto/5.png',
			},
			{
				id: 89,
				nombre: 'Proyecto Móvil - 6',
				descripcion:
					'Proyecto Móvil 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/proyecto/6.png',
			},
		],				
		tarea: [
			{
				id: 90,
				nombre: 'Tarea Móvil - 1',
				descripcion:
					'Tarea Móvil 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/1.png',
			},
			{
				id: 91,
				nombre: 'Tarea Móvil - 2',
				descripcion:
					'Tarea Móvil 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/2.png',
			},
			{
				id: 92,
				nombre: 'Tarea Móvil - 3',
				descripcion:
					'Tarea Móvil 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/3.png',
			},
			{
				id: 93,
				nombre: 'Tarea Móvil - 4',
				descripcion:
					'Tarea Móvil 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/4.png',
			},
			{
				id: 94,
				nombre: 'Tarea Móvil - 5',
				descripcion:
					'Tarea Móvil 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/5.png',
			},
			{
				id: 95,
				nombre: 'Tarea Móvil - 6',
				descripcion:
					'Tarea Móvil 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/6.png',
			},			
			{
				id: 96,
				nombre: 'Tarea Móvil - 7',
				descripcion:
					'Tarea Móvil 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/7.png',
			},
			{
				id: 97,
				nombre: 'Tarea Móvil - 8',
				descripcion:
					'Tarea Móvil 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/8.png',
			},
			{
				id: 98,
				nombre: 'Tarea Móvil - 9',
				descripcion:
					'Tarea Móvil 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/9.png',
			},
			{
				id: 99,
				nombre: 'Tarea Móvil - 10',
				descripcion:
					'Tarea Móvil 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/10.png',
			},
			{
				id: 100,
				nombre: 'Tarea Móvil - 11',
				descripcion:
					'Tarea Móvil 11 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/tarea/11.png',
			},
		],
	},
};

const { fotos } = datos;

var dataCategorias = {
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

// Se importan los datos de la "base de datos" para las categorías

// Se obtiene el array de categorías dentro de dataCategorías
const {categorias} = dataCategorias;

// Se obtiene el elemento que contiene el id 'categorías' el cual es el div que contiene las diversas cards
const contenedorCategorias$1 = document.getElementById('categorias');

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
    contenedorCategorias$1.append(nuevaCategoria);
});

// Se importa el dataset de fotos

// Se obtiene el elemento con tiene la clase 'galeria'
const galeria$3 = document.getElementById('galeria');

// Función para cargar imagen
const cargarImagen = (id, nombre, ruta, descripcion) => {   
    // Se actualiza la ruta de la primer imagen
    galeria$3.querySelector('.galeria__imagen').src = ruta;
    // Se le pone el nombre de la foto en el front con innerText
    galeria$3.querySelector('.galeria__titulo').innerText = nombre;
    // Se le agrega la descripción al pie de la imagen
    galeria$3.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    // Se le pasa el id a la imagen pero no se muestra
    galeria$3.querySelector('.galeria__imagen').dataset.idImagen = id;

    // Se obitene la categoria actual que se muestra en el modal
    const categoriaActual = galeria$3.dataset.categoria;
    // Se obtiene el conjunto de fotos de la categoría actual
    const fotos = datos.fotos[categoriaActual];
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
    if(galeria$3.querySelectorAll('.galeria__carousel-slide').length > 0) {
        // Primero se elimina el contorno resaltante anterior 
        galeria$3.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        
        // Se le agrega el contorno que resalta la imagen seleccionada
        galeria$3.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }
};

// Se importan las fotos de la "base de datos"

// Obtiene el elemento con id 'categorias' que son las cards
const contenedorCategorias = document.getElementById('categorias');

// Obtiene el elemento con id 'galeria' que es el modal que contiene las imágenes de cada categoria
const galeria$2 = document.getElementById('galeria');

// Se le agrega un evento al contenedor de Categorías, con un click
contenedorCategorias.addEventListener('click', (e) => {
    // Evita el href = '#' que hace que la página suba cuando se le hace click
    e.preventDefault();
    
    // si el elemento mas cerca al que se le hizo click dentro del contenedor de categorías es una etiqueta 'a'
    if(e.target.closest('a')) {
        // al elemento galería se le agrega la clase 'galeria--active' que lo muestra en pantalla
        galeria$2.classList.add('galeria--active');
        // evita que salga el scrollbar dentro del modal de la galería
        document.body.style.overflow = 'hidden';
        
        // Se obtiene la categoría exacta a la que se le dio click
        const categoriaActiva = e.target.closest('a').dataset.categoria;
        // se le agrega un elemento personalizado a categoria el cual nos indica cual es la categoría activa
        galeria$2.dataset.categoria = categoriaActiva;
        // Se obtiene la lista de fotos de la categoría a la que se le dio click
        const fotos = datos.fotos[categoriaActiva];
        // Se obtiene el carousel
        const carousel = galeria$2.querySelector('.galeria__carousel-slides');
        
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
                    <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
                </a>
            `;
            // Se agrega a al elemento que contiene la clase "galeria__carousel-slides" el código anterior
            // por cada elemento dentro de 'fotos'
            galeria$2.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        // Se le agrega la clase 'galeria__carousel-slides--active' el cual agrega un borde a la imagen seleccionada
        // dentro del carousel
        galeria$2.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }   
});

// Se obtiene el elemento con tiene la clase 'galeria'
const galeria$1 = document.getElementById('galeria');

// Función para cerrar galeria
const cerrarGaleria = () => {
    galeria$1.classList.remove('galeria--active');
};

// Se importan las fotos de la "base de datos"

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
};

// Se importa la función de cerrar galeria

// Se obtiene el elemento con tiene la clase 'galeria'
const galeria = document.getElementById('galeria');

// Se agrega el evento click a la galeria
galeria.addEventListener('click', (e) => {
    // Se obtiene y almacena el boton mas cerca al elemento al que se le dio click
    const boton = e.target.closest('button');

    // si existe un botón que tiene un dataset y ese dataset tiene la propiedad 
    // accion el cual es igual a 'cerrar-galeria'?
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        // Se llama a la función cerrar galería
        cerrarGaleria();

        // Se le agrega el scrollbar que se le había quitado antes
        document.body.style.overflow = '';
    }

    // -- Slide click de carousel --
    // Si al elemento al que se le dio click tiene un dataset con valor de 'id'
    if(e.target.dataset.id) {
        // Se llama a la función de click en el slide
        clickSlide(e);
    }
});
