import { createReducer, on } from '@ngrx/store';
import { crearTarea,editarTarea, borrarTarea,borrarTodos} from './principal.actions';
import { Tareas} from './models/tareas.model';

export const estadoInicial: Tareas[] = [
  new Tareas('Tarea1','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea2','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea3','Sacar la basura','Juan','2h','Inicial'),
]

const _tareasReducer = createReducer(estadoInicial,
  on(crearTarea, (state, { nombre,accion,responsable,duracion,estado }) =>
  [...state, new Tareas( nombre,accion,responsable,duracion,estado )  ] ),
  on (borrarTarea, ( state, { id } ) =>  state.filter( todo => todo.id !== id ) ),
  on(borrarTodos, ( state ) => []),
  on(editarTarea, (state, { id,nombre,accion,responsable,duracion,estado}) => {
    return state.map(tarea => {

      if ( tarea.id === id  ) {
        return {
          ...tarea,
          nombre :nombre,
          accion :accion,
          responsable :responsable,
          duracion :duracion,
          estado :estado,
        }
      } else {
        return tarea;
      }

    });
  }),)


  export function tareaReducer(state:any, action:any) {
    return _tareasReducer(state, action);
  }
