import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.page.html',
  styleUrls: ['./assign.page.scss'],
})
export class AssignPage implements OnInit {
  @ViewChild('searchInput') sInput:any;
  
  id: any;
  data: any = {};
  items: any[] = [];
  ordenes:any [] = []
  allriders: any[] = []
  findriders: any[] =[];
  veg: boolean = false;
  isLoading: boolean=false;
  cartData: any = {};
  storedData: any = {};
  query: any;
  model: any = {
    icon: 'search-outline',
    title: 'Rider no encontrado'
  };
  
  
  
  

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.ordenes = this.api.ordenes;
    this.allriders = this.api.allriders;
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if(!paramMap.has('assingId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('assingId');
      console.log('id: ', this.id);
      this.getItems();
    });
  }

  async onSearchChange(event:any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.findriders = [];
    if(this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async() => {
        this.findriders = await this.allriders.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        console.log(this.findriders);
        this.isLoading = false;
      }, 1000);
    }
  }

  getCart() {
   return Preferences.get({key: 'cart'});
  }

  async getItems() {
    this.isLoading = true;
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    setTimeout(async() => {      
      let data: any = this.ordenes.filter(x => x.uid === this.id);
      this.data = data[0];
      console.log('restaurant: ', this.data);
      let cart: any = await this.getCart();
      console.log('cart: ', cart);
      if(cart?.value) {
        this.storedData = JSON.parse(cart.value);
        console.log('storedData: ', this.storedData);
        this.cartData.totalItem = this.storedData.totalItem;
        this.cartData.totalPrice = this.storedData.totalPrice;
      }
      this.isLoading = false;
    }, 1500);
  }
}
 