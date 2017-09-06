import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from  '../../app/services/lista-deseos.service'
import { AgregarComponent } from '../agregar/agregar.component'
import { DetallesComponent } from '../detalles/detalles.component'

import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {
    constructor(private _listadeseosService:ListaDeseosService,
                private _navController:NavController) { }

    ngOnInit() { }

    irAgregar(){
      this._navController.push(AgregarComponent);
    }

  verDetalle(lista, idx){
    this._navController.push(DetallesComponent, {lista, idx});
  }
}
