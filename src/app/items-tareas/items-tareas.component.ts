import { Component,OnInit,Input } from '@angular/core';
import { Tareas } from '../principal/models/tareas.model';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../principal/principal.actions'

@Component({
  selector: 'app-items-tareas',
  templateUrl: './items-tareas.component.html',
  styleUrls: ['./items-tareas.component.scss']
})
export class ItemsTareasComponent  {


  editando: boolean= false

  @Input() tarea! : Tareas

  constructor(private store:Store<AppState>){ }

    // editar(){
    //   this.editando = true;
    //   this.listadoTareas

    //   this.store.dispatch(
    //     actions.editarTarea({
    //       id: this.listadoTareas[0].id,
    //       nombre:this.listadoTareas[0].nombre,
    //     })
    //   );
    // }

    editar(id :number){

    }
    eliminar(id :number){
      this.store.dispatch( actions.borrarTarea({id}) );
    }

    guardarLocalStorage(){

    }

  }



