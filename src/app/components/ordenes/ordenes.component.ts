import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-orden',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
})
export class OrdenesComponent implements OnInit {

  @Input() orden: any;
  @Input() index: any;

  constructor() { }

  ngOnInit() {}

}

