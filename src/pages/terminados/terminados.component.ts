import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from  '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { DetallesComponent } from '../detalles/detalles.component'

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(private _listadeseosService:ListaDeseosService,
                private _navController:NavController) { }

    ngOnInit() { }


  verDetalle(lista, idx){
    this._navController.push(DetallesComponent, {lista, idx});
  }

}
