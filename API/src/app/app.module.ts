import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { FormsModule} from '@angular/forms';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectorComponent } from './selector/selector.component';
import { Selectorclase2Component } from './selectorclase2/selectorclase2.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { ElmentosModule } from './elmentos/elmentos.module';
import {HttpClientModule} from '@angular/common/http';
import { CRUDComponent } from './crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    DadoComponent,
    CronometroComponent,
    SelectorComponent,
    Selectorclase2Component,
    ListadoarticulosComponent,
    CRUDComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ElmentosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
