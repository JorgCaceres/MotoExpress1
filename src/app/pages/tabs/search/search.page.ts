import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput:any;
  model: any = {
    icon: 'search-outline',
    title: 'Rider no encontrado'
  };
  isLoading: boolean = false;
  query: any;
  allriders: any[] = []

  findriders: any[] =[];

  constructor(
    private api: ApiService
  ){}

  ngOnInit() {
    this.allriders = this.api.allriders;
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
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

}

