import { ActionReducerMap } from '@ngrx/store';


import { Tareas } from './principal/models/tareas.model';
import { tareaReducer } from './principal/principal.reducer';


export interface AppState {
  tareas: Tareas[],
}

export const appReducers: ActionReducerMap<AppState> = {
  tareas: tareaReducer,
}
