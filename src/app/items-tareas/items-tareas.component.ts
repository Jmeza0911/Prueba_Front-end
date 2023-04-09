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


    editar(){
      this.editando = true;
      // this.txtInput.setValue( this.tarea.nombre );
      // this.txtInput.setValue( this.tarea.accion );
      // this.txtInput.setValue( this.tarea.responsable );
      // this.txtInput.setValue( this.tarea.duracion );
      // this.txtInput.setValue( this.tarea.estado );

}

terminarEdicion() {
  this.editando = false;

//   if( this.txtInput.invalid ) { return; }
//   if( this.txtInput.value === this.tarea.nombre ) { return; }


//   this.store.dispatch(
//     actions.editar({
//       id: this.tarea.id,
//       texto: this.txtInput.value
//     })
//   );
}

    eliminar(id :number){
      this.store.dispatch( actions.borrarTarea({id}) );
    }

    guardarLocalStorage(){
      localStorage.setItem("tarjetas",JSON.stringify(this.tarea.id))
    }

  }



