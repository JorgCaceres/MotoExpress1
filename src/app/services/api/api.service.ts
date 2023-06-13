import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  banners = [
    {banner: 'assets/imgs/1.png'}
  ];

  ordenEnCurso = [
    {
      id_orden: '12345',
      foto: 'assets/imgs/moto1.jpg',
      name: 'Bastian Pavez',
      direcciones: ['Las Hualtatas 8452', 'Las Condes'],
      hora: '17:45',
      distancia: '4.3'
    },
    {
      id_orden: '22345',
      foto: 'assets/imgs/moto2.png',
      name: 'Camilo Henrriquez',
      direcciones: ['Valenzuela Llanos 690', 'La Reina'],
      hora: '18:25',
      distancia: '2.3'
    },
    {
      id_orden: '12345',
      foto: 'assets/imgs/moto1.jpg',
      name: 'Bastian Pavez',
      direcciones: ['Las Hualtatas 8452', 'Las Condes'],
      hora: '17:45',
      distancia: '4.3'
    },
    {
      id_orden: '22345',
      foto: 'assets/imgs/moto2.png',
      name: 'Camilo Henrriquez',
      direcciones: ['Valenzuela Llanos 690', 'La Reina'],
      hora: '18:25',
      distancia: '2.3'
    },
  ];

  ordenes = [
    {
      id_orden: "12345",
      uid: '12wefdss',
      sector_id: "s01",
      cover: "assets/imgs/cliente1.png",
      foto: 'assets/imgs/moto1.jpg',
      name_rider: 'Bastian Pavez',
      telefono_rider: '+56945789813',
      name_cliente: 'Hugo Roldan',
      telefono_cliente: '+56998765432',
      dir_recogida: ['Las Carmelitas 240', 'Las Condes'],
      dir_entrega: ['Cuarto Centenario 90', 'Las Condes'],
      hora: '17:45',
      distancia: '4.3',
      sin_asignar: false
    },
    {
      id_orden: "98765431",
      sector_id: "s05",
      cover: "assets/imgs/cliente2.png",
      foto: 'assets/imgs/moto1.jpg',
      name_rider: 'Pablo Robles',
      telefono_rider: '+56945789813',
      name_cliente: 'Ignacio Caisedo',
      telefono_cliente: '+56998765432',
      dir_recogida: ['Rojas Magallanez 640', 'La Florida'],
      dir_entrega: ['Diego Portales 456', 'Puente Alto'],
      hora: '14:25',
      distancia: '4.3',
      sin_asignar: true
    },
    {
      id_orden: "456789",
      sector_id: "s03",
      cover: "assets/imgs/cliente2.png",
      foto: 'assets/imgs/moto1.jpg',
      name_rider: 'Bastian Pavez',
      telefono_rider: '+56945789813',
      name_cliente: 'Nicolas Cordova',
      telefono_cliente: '+56998765432',
      dir_recogida: ['Las Camelias 040', 'Santiago'],
      dir_entrega: ['Ricardo Lyon 890', 'Providencia'],
      hora: '14:25',
      distancia: '4.3',
      sin_asignar: true
    },
    {
      id_orden: "654987",
      sector_id: "s02",
      cover: "assets/imgs/cliente2.png",
      foto: 'assets/imgs/moto1.jpg',
      name_rider: 'Bastian Pavez',
      telefono_rider: '+56945789813',
      name_cliente: 'Jorge Caceres',
      telefono_cliente: '+56998765432',
      dir_recogida: ['Las Camelias 040', 'La Reina'],
      dir_entrega: ['Ricardo Lyon 890', 'Peñalolen'],
      hora: '14:25',
      distancia: '4.3',
      sin_asignar: false
    },
  ];

    sectores: any[] = [
      {
        id: "s01",
        name: "Nororiente",
        uid: "0123456"
      },
      {
        id: "s02",
        name: "Oriente",
        uid: "1123456"
      },
      {
        id: "s03",
        name: "Suroriente",
        uid: "2123456"
      },
      {
        id: "s04",
        name: "Norte",
        uid: "3123456"
      },
      {
        id: "s05",
        name: "Centro",
        uid: "4123456"
      },
      {
        id: "s06",
        name: "Sur",
        uid: "5123456"
      },
      {
        id: "s07",
        name: "Norponiente",
        uid: "6123456"
      },
      {
        id: "s08",
        name: "Poniente",
        uid: "7123456"
      },
      {
        id: "s09",
        name: "Surponiente",
        uid: "8123456"
      },
    ];

  constructor() { }
}
