import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emty-screen',
  templateUrl: './emty-screen.component.html',
  styleUrls: ['./emty-screen.component.scss'],
})
export class EmtyScreenComponent  implements OnInit {

  @Input() model: any ;
  constructor() { }

  ngOnInit() {}

}
