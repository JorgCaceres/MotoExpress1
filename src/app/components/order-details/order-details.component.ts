import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent  implements OnInit {

  @Input() data: any;
  @Input() isLoading: any;

  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine: any) {
    return cuisine.join(', ');
  }
}