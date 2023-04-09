import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from './principal.actions';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {


  constructor(private fb : FormBuilder,
              private store : Store<AppState>,
              private router : Router){}

  miFormulario : FormGroup = this.fb.group({
    nombre : ['',[Validators.required]],
    accion : ['',[Validators.required]],
    responsable : ['',[Validators.required]],
    duracion : ['',[Validators.required]],
    estado : ['5',[Validators.required]]

  })
  guardar(){

    if(!this.miFormulario.valid){
      Swal.fire({
        title: 'Debes llenar todos los campos',
        icon: 'error',
       })
      return
    }

      this.store.dispatch(actions.crearTarea(this.miFormulario.value) );
      Swal.fire({
      title: 'Has agregado una nueva tarea!!',
      icon: 'success',
     })
     this.router.navigate(['/listado-tareas'])

  }
}
