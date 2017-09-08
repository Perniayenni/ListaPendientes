import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/lista';

@Pipe({
    name: 'pendientes',
    pure: false
})

export class PendientesPipes implements PipeTransform {
    transform(listas:Lista[], estado:boolean = false): Lista[] {

      let nuevaLista:Lista[]=[];

        for (let list of listas){

           if (list.terminado == estado){
            nuevaLista.push(list);
          }
        }
        return nuevaLista;
    }
}
