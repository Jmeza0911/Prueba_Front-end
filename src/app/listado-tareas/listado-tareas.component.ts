import { Component, OnInit } from '@angular/core';

import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../principal/principal.actions';
import { FormControl } from '@angular/forms';
import { Tareas } from '../principal/models/tareas.model';




@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.scss']
})
export class ListadoTareasComponent implements OnInit{


  listadoTareas: Tareas[] =[]

  constructor(private store:Store<AppState>){ }

  ngOnInit(): void {

    // this.store.subscribe( {tareas} => {
    //   	this.listadoTareas = tareas
    // });

  }

  editar(){

  }
  eliminar(){
    // this.store.dispatch( actions.borrarTarea({id:this.}) );
  }

  }






