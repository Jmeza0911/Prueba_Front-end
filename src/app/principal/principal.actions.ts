import { createAction, props } from '@ngrx/store';

export const crearTarea = createAction(
  '[Tareas] Crear Tarea',
  props<{ nombre: string , accion:string , responsable : string , duracion : string , estado : string }>()
);

export const editarTarea = createAction(
  '[Tareas] Editar Tarea',
  props<{ id: number, nombre: string ,accion: string , responsable : string , duracion : string , estado : string}>()
);

export const borrarTarea = createAction(
  '[Tareas] Borrar Tarea',
  props<{ id: number }>()
);

export const borrarTodos = createAction(
  '[Tareas] Borrar todas las tareas',
);


