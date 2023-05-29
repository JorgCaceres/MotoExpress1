import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss'],
})
export class RidersComponent  implements OnInit {
  @Input() riders: any;

  constructor() { }

  ngOnInit() {}

}
