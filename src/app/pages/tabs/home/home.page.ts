import { Component, Input, OnInit } from '@angular/core';
import { Ordenes } from 'src/app/models/ordenes.model';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  banners: any[] = [];
  ordenEnCurso: Ordenes[] = [];
  isLoading: boolean = false;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners=this.api.banners;
      this.ordenEnCurso = this.api.ordenEnCurso;
      this.isLoading = false;
    }, 1500);
  }

}
