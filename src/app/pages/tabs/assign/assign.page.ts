import { Component, OnInit } from '@angular/core';
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

  
  id: any;
  data: any = {};
  items: any[] = [];
  ordenes:any [] = []
  veg: boolean = false;
  isLoading: boolean=false;
  cartData: any = {};
  storedData: any = {};
  model = {
    icon: 'fast-food-outline',
    title: 'No Menu Available'
  };
  

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.ordenes = this.api.ordenes;
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
 