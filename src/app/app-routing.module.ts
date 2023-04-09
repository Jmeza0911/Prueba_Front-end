import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { ItemsTareasComponent } from './items-tareas/items-tareas.component';

const routes: Routes = [
  {
    path: 'Homepage',
    component: PrincipalComponent
  },
  {
    path: 'listado-tareas',
    component: ListadoTareasComponent
  },
  {
    path: '**',
    redirectTo: 'Homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
