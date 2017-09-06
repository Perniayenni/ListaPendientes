import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista'
import {stringifyElement} from "@angular/platform-browser/testing/src/browser_util";


@Injectable()
export class ListaDeseosService {

  listas:Lista[]=[];

    constructor() {
      this.cargarData();

      console.log('Listo para usar');
    }

    actualizarData(){
      localStorage.setItem("data", JSON.stringify(this.listas));
    }

    cargarData(){
      if (localStorage.getItem("data")){
        this.listas = JSON.parse(localStorage.getItem(("data")));
      }

    }

    agregarListas(lista:Lista){
      console.log(lista);
      this.listas.push(lista);
      this.actualizarData();
    }


}
