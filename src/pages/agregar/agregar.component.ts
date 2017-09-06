import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular'
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {
  nombreLista:string= "";
  nombreItem:string= "";

  items:ListaItem[]=[];
  constructor(
    public alertCtrl:AlertController,
    public navCtrl:NavController,
    public _listaDeseos:ListaDeseosService
  ) { }

    ngOnInit() { }

    agregar(){
      if ( this.nombreItem == ""){
        return;
      }

      let  item = new ListaItem();
      item.nombre = this.nombreItem;

      this.items.push( item );
      this.nombreItem="";
    }

    eliminar( i:number ){
      this.items.splice( i , 1 );
    }

  AgregarLista(){

      if(this.nombreLista == ""){
        let alert = this.alertCtrl.create({
          title: 'Nombre de la lista ',
          subTitle: 'Por favor ingrese el nombre de la lista antes de gurdar',
          buttons: ['OK']
        });
        alert.present();
      }else{

      let lista = new Lista (this.nombreLista);
      lista.items = this.items;

      /*this._listaDeseos.listas.push(lista);*/
        this._listaDeseos.agregarListas(lista);
      this.navCtrl.pop();
      }

  }
}
