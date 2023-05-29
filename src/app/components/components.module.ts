import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncursoComponent } from './encurso/encurso.component';
import { IonicModule } from '@ionic/angular';
import { LoadingEncursoComponent } from './loading-encurso/loading-encurso.component';
import { RidersComponent } from './riders/riders.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';



@NgModule({
  declarations: [
    EncursoComponent,
    LoadingEncursoComponent,
    RidersComponent,
    EmptyScreenComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncursoComponent,
    LoadingEncursoComponent,
    RidersComponent,
    EmptyScreenComponent
  ],
  entryComponents:[]
})
export class ComponentsModule { }
