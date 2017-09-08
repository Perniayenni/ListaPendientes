import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController, NavParams, AlertController} from 'ionic-angular';

@Component({
    selector: 'app-detalles',
    templateUrl: 'detalles.component.html'
})
export class DetallesComponent implements OnInit {

  idx:number;
  lista:Lista;

    constructor(
      public navContrl:NavController,
      public navParams:NavParams,
      public _listaDeseosService:ListaDeseosService,
      public  alertControler:AlertController
    ) {
      this.idx = this.navParams.get('idx');
      this.lista = this.navParams.get('lista');
    }

    ngOnInit() {}

  actualizar( items:ListaItem ){
    items.completo = !items.completo;
    let todasMArcados= true;
    for (let item of this.lista.items){
      if (!item.completo){
        todasMArcados=false;
        break;
      }
    }
    this.lista.terminado = todasMArcados;
    this._listaDeseosService.actualizarData();
  }

  borrarItem(){
    let confirm = this.alertControler.create({
      title: 'Eliminar evento',
      message: '¿Seguro desea eliminar el evento?',
      buttons: ['Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseosService.eliminarListas(this.idx);
            this.navContrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }

}
