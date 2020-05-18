import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';
import { OperacionesService } from '../operaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url: string ='';
  details :any = "";
  show = "hidden";
  constructor(private dialog : MatDialog,private  services : OperacionesService ,) 
  {
    this.customers();
  }

  ngOnInit() {
  }
 

 crearCliente(){

  this.dialog.open(CrearClienteComponent);
 }
 customers(){
    this.url = 'https://localhost:44382/api/Operaciones';
    this.services.metodoGet(this.url).subscribe(reponse =>{
      this.details = reponse;
      console.log(reponse)
      
    });
 }
}
