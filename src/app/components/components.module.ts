import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncursoComponent } from './encurso/encurso.component';
import { IonicModule } from '@ionic/angular';
import { LoadingEncursoComponent } from './loading-encurso/loading-encurso.component';



@NgModule({
  declarations: [
    EncursoComponent,
    LoadingEncursoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncursoComponent,
    LoadingEncursoComponent
  ],
  entryComponents:[]
})
export class ComponentsModule { }
