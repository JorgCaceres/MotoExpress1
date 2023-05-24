import { Component, Input, OnInit } from '@angular/core';
import config from '../../../../../capacitor.config';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  banners: any[] = [];
  enCursos: any = [];
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        { banner: 'assets/imgs/1.png' },
        { banner: 'assets/imgs/2.png' }//cambiar imagen ,esta como ejemplo
     /* {banner: 'assets/imgs/2.png'}
        {banner: 'assets/imgs/2.png'} */
      ];
      this.enCursos = [
        {
          uid: '12qwas',
          foto: 'assets/imgs/moto1.jpg',
          name: 'Bastian Pavez',
          direcciones: 'Las Hualtatas 8452, Las Condes',
          hora: '17:45',
          distancia: '4.3'
        },
        {
          uid: '34qwas',
          foto: 'assets/imgs/moto2.png',
          name: 'Camilo Henrriquez',
          direcciones: 'Valenzuela Llanos 690. La Reina',
          hora: '18:25',
          distancia: '2.3'
        }
      ];
      this.isLoading = false;
    }, 1500);
  }

}
