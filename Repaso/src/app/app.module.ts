import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfCondicionalComponent } from './if-condicional/if-condicional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HOMEComponent } from './home/home.component';
import { CRUDComponent } from './crud/crud.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    IfCondicionalComponent,
    HOMEComponent,
    CRUDComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
