import { Component,OnInit,Input } from '@angular/core';
import { Tareas } from '../principal/models/tareas.model';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../principal/principal.actions'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-items-tareas',
  templateUrl: './items-tareas.component.html',
  styleUrls: ['./items-tareas.component.scss']
})
export class ItemsTareasComponent implements OnInit {

  txtInput!: FormControl;
  editando: boolean= false

  @Input() tarea! : Tareas


  constructor(private store:Store<AppState>,
              private fb :FormBuilder){ }

    miFormulario : FormGroup = this.fb.group({
      nombre : ['',[Validators.required]],
      accion : ['',[Validators.required]],
      responsable : ['',[Validators.required]],
      duracion : ['',[Validators.required]],
      estado : ['',[Validators.required]]

    })

  ngOnInit(): void {

  }

    editar(){
      this.editando = true;
      this.miFormulario.setValue( {
        nombre :this.tarea.nombre,
        accion :this.tarea.accion,
        responsable :this.tarea.responsable,
        duracion :this.tarea.duracion,
        estado :this.tarea.estado,
      });


}

    terminarEdicion() {
      this.editando = false;

    }

    eliminar(id :number){
      this.store.dispatch( actions.borrarTarea({id}) );
    }

    guardarCambios(){
      this.store.dispatch( actions.editarTarea({id:this.tarea.id,...this.miFormulario.value}) );
    }


    guardarLocalStorage(){
      localStorage.setItem("tarjetas",JSON.stringify(this.tarea.id))
    }

  }



