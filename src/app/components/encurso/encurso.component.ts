import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-encurso',
  templateUrl: './encurso.component.html',
  styleUrls: ['./encurso.component.scss'],
})
export class EncursoComponent  implements OnInit {

  @Input() encurso: any;
  // @Output() singleEncurso = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  getDireccion(direccion: any[]){
    return direccion.join(', , ');
  }

  // goToSingle(){
  //   this.singleEncurso.emit(this.encurso);
  // }

}
