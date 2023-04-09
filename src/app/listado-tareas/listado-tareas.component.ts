import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Tareas } from '../principal/models/tareas.model';
import * as actions from '../principal/principal.actions'





@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.scss']
})
export class ListadoTareasComponent implements OnInit {

  listadoTareas: Tareas[] = [];

  constructor(private store : Store<AppState>){

  }


  ngOnInit(): void {

    this.store.select('tareas')
    .subscribe((tareas)=> this.listadoTareas=tareas)


    };

    eliminarTodos(){
      this.store.dispatch( actions.borrarTodos() );
    }

}









