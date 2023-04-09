import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from './principal.actions';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {


  constructor(private fb : FormBuilder,
              private store : Store<AppState>){}

  miFormulario : FormGroup = this.fb.group({
    nombre : ['',[Validators.required]],
    accion : ['',[Validators.required]],
    responsable : ['',[Validators.required]],
    duracion : ['',[Validators.required]],
    estado : ['5',[Validators.required]]

  })
  guardar(){
    this.store.dispatch(actions.crearTarea(this.miFormulario.value) );
  }
}
