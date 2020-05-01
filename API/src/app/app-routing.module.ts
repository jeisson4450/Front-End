import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadoComponent } from './dado/dado.component';
import { SelectorComponent } from './selector/selector.component';
const routes: Routes = [
  {
    path: 'dado',
    component: DadoComponent
  },
  {
    path: 'selector',
    component: SelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
