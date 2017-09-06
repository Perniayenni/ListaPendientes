import { Component, OnInit } from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'app-detalles',
    templateUrl: 'detalles.component.html'
})
export class DetallesComponent implements OnInit {

  idx:number;
  lista:any;

    constructor(
      public navContrl:NavController,
      public navParams:NavParams
    ) {
      this.idx = this.navParams.get('idx');
      this.lista = this.navParams.get('lista');
    }

    ngOnInit() { }

}
