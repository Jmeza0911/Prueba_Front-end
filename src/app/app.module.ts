import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PrincipalComponent } from './principal/principal.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';
import { ItemsTareasComponent } from './items-tareas/items-tareas.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';





@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListadoTareasComponent,
    ItemsTareasComponent

  ],
  imports: [

    StoreModule.forRoot( appReducers ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
