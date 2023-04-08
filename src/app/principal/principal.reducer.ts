import { createReducer, on } from '@ngrx/store';
import { crearTarea,editarTarea, borrarTarea} from './principal.actions';
import { Tareas} from './models/tareas.model';

export const estadoInicial: Tareas [] = [
  new Tareas('Tarea1','Sacar la basura','Juan','2h','Inicial'),
  new Tareas('Tarea2','Planchar','Juan','1h','En progreso'),
];



const _tareasReducer = createReducer(estadoInicial,
  on(crearTarea, (state, { nombre,accion,responsable,duracion,estado }) => [...state, new Tareas( nombre,accion,responsable,duracion,estado )  ] ),
  on (borrarTarea, ( state, { id } ) =>  state.filter( todo => todo.id !== id ) ),
  on(editarTarea, (state, { id,nombre}) => {

    return state.map( todo => {

      if ( todo.id === id  ) {
        return {
          ...todo,
          nombre :nombre
        }
      } else {
        return todo;
      }

    });
  }),)


  export function tareaReducer(state:any, action:any) {
    return _tareasReducer(state, action);
  }
