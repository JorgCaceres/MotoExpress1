import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
/* import { Preferences } from '@capacitor/preferences'; */

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  enCursos = [
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
  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if (!paramMap.has('encursoId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('encursoId');
      console.log('id: ', this.id);
    });
  }

}
