import { AfterContentChecked, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, {Keyboard, Navigation, Pagination, Scrollbar, SwiperOptions} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar,Keyboard]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent  implements OnInit, AfterContentChecked {
 @Input() bannerImages:any;
 config: SwiperOptions = {}; 

  constructor() { }

  ngOnInit() {}

  ngAfterContentChecked(): void {
    this.config = {
    slidesPerView: 1.1,
    //navigation: true,
    pagination: {clickable: true },
    keyboard: { enabled: true }
    //centeredSlides: true
    }
    
  }

}