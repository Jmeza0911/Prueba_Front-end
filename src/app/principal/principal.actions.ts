import { createAction, props } from '@ngrx/store';

export const crearTarea = createAction(
  '[ToDonut] Crear Tarea',
  props<{ nombre: string , accion:string , responsable : string , duracion : string , estado : string }>()
);

export const editarTarea = createAction(
  '[ToDonut] Editar Tarea',
  props<{ id: number, nombre: string }>()
);

export const borrarTarea = createAction(
  '[ToDonut] Borrar Tarea',
  props<{ id: number }>()
);

