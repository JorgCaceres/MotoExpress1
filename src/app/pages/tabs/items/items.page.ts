import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
//import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  data: any = {};
  items: any[] = [];
  assign: boolean = false;
  isLoading: boolean = false;
  cartData: any = {};
  storedData: any = {};


  sectores: any[] = []

  allItems:any [] = []

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.sectores = this.api.sectores;
    this.allItems = this.api.ordenes;
    this.items  = this.allItems; 
    
    // this.route.paramMap.subscribe(paramMap =>{
    //   console.log('data: ' , paramMap);
    //   if(!paramMap.has('encursoId')) {
    //     this.navCtrl.back();
    //     return;
    //   }
    //   this.id = paramMap.get('encursoId');
    //   console.log('id' , this.id);
    //   this.getItems();
    // })
  }
  getDireccion(direcciones:any) {
    return direcciones.join(',');
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
      //  let data: any = this.allItems.filter(x => x.id_orden === this.id);
      //  this.data = data[0];
       let cart: any = await this.getCart();
       console.log('cart: ', cart);
       if(cart?.value) {
         this.storedData = JSON.parse(cart.value);
         console.log('storedData: ', this.storedData);
         if(this.id == this.storedData.restaurant.id_orden && this.allItems.length > 0) {
           this.allItems.forEach((element: any) => {
             this.storedData.items.forEach((ele:any) => {
               if(element.id != ele.id) return;
               element.quantity = ele.quantity;
             })
           })
         }
         this.cartData.totalItem = this.storedData.totalItem;
         this.cartData.totalPrice = this.storedData.totalPrice;
       }
       this.isLoading = false;
     }, 1200);
   }

   assignOnly(event:any) {
    console.log(event.detail.checked);
    this.items = this.allItems
    if(event.detail.checked == true) this.items = this.allItems.filter(x => x.sin_asignar === true);
    else this.items = this.allItems
    console.log('items: ', this.items);
  }


}
