import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PrincipalComponent } from './principal/principal.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListadoTareasComponent
  ],
  imports: [
    StoreModule.forRoot( appReducers ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
