import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }
 arreglo :any[]=["jeisson",'gonzalez','piracoca','suzuki','carro','celular','hulk'];

 crearCliente(){

  this.dialog.open(CrearClienteComponent);

 }
}
