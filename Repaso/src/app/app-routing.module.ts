import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfCondicionalComponent } from './if-condicional/if-condicional.component';
import { HOMEComponent } from './home/home.component';
import { CRUDComponent } from './crud/crud.component';
import { ObservableComponent } from './observable/observable.component';
const routes: Routes = [
 {
   path : 'IfCondicional',
   component : IfCondicionalComponent
 },
 {
   path: '',
   component: HOMEComponent
 },
 {
   path: 'CRUD-arreglo',
   component: CRUDComponent
 },
 {
   path: 'Observable',
   component: ObservableComponent
 }
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  }
)
export class AppRoutingModule { }
