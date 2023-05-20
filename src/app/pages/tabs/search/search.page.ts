import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput', { static: false })
  searchInput!: IonSearchbar; // Agrega el operador '!' para indicar que la propiedad se asignará más tarde

  @ViewChild('searchInput') sInput: any;
  model: any= {
    icon: 'search-outline',
    title: 'No hay Orden en curso record found'
  };


  isLoading: boolean = false;
  query: any;
  allencurso: any[] = [
    

    {
      foto: 'assets/imgs/moto1.jpg',
      name: 'Bastian Pavez',
      short_name: 'bastian pavez',
      direcciones: 'Las Hualtatas 8452, Las Condes',
      hora: '17:45',
      distancia: '4.3'
    },
    {
      foto: 'assets/imgs/moto2.png',
      name: 'Camilo Henrriquez',
      short_name: 'camilo henriquez',
      direcciones: 'Valenzuela Llanos 690. La Reina',
      hora: '18:25',
      distancia: '2.3'
    }

  ];

  enCursos: any[] = [];;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }
  onSearchBarBlur() {
    // Restablecer el enfoque de la barra de búsqueda
    this.searchInput.setFocus();
  }


  async onSearchChange(event: any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.enCursos = [];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.enCursos = await this.allencurso.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        console.log(this.enCursos);
        this.isLoading = false;
      }, 1000);
    }
  }

}
