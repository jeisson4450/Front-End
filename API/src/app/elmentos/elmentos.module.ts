import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos/modulos.component';
import { JSONComponent } from './json/json.component';



@NgModule({
  declarations: [ModulosComponent, JSONComponent],
  exports: [ModulosComponent, JSONComponent],
  imports: [
    CommonModule
  ]
})
export class ElmentosModule { }
