import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncursoComponent } from './encurso/encurso.component';
import { IonicModule } from '@ionic/angular';
import { LoadingEncursoComponent } from './loading-encurso/loading-encurso.component';
import { EmtyScreenComponent } from './emty-screen/emty-screen.component';


@NgModule({
  declarations: [
    EncursoComponent,
    LoadingEncursoComponent,
    EmtyScreenComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncursoComponent,
    LoadingEncursoComponent,
    EmtyScreenComponent
  ],
  entryComponents:[]
})
export class ComponentsModule { }
