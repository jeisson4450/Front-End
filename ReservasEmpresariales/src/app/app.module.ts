import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { OperacionesService } from './operaciones.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { CrearSalasComponent } from './crear-salas/crear-salas.component';
import { EliminarSalasComponent } from './eliminar-salas/eliminar-salas.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearClienteComponent,
    EliminarClienteComponent,
    ActualizarClienteComponent,
    CrearSalasComponent,
    EliminarSalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,

  ],
  exports:[
    MatDialogModule,
  ],
  providers: [OperacionesService],
  bootstrap: [AppComponent],
  entryComponents:[CrearClienteComponent ,EliminarClienteComponent,ActualizarClienteComponent,CrearSalasComponent,EliminarSalasComponent]
})
export class AppModule { }
