import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';


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

  eliminarListas(idx:number){
   this.listas.splice(idx,1);
    this.actualizarData();
  }


}
