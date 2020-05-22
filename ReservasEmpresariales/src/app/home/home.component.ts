import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';
import { OperacionesService } from '../operaciones.service';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { CrearSalasComponent } from '../crear-salas/crear-salas.component';
import { EliminarSalasComponent } from '../eliminar-salas/eliminar-salas.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare let alertify:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url: string ='';
  details :any=[];
  filtros: FormGroup;
  constructor(private dialog : MatDialog,public fb: FormBuilder,private  services : OperacionesService ) 
  {
    this.builForm();
  }
  customers(){
    this.details = []
    this.url = 'https://localhost:44382/api/Operaciones';
    this.services.metodoGet(this.url).subscribe(reponse =>{
      for(var i=0 ; i<reponse["length"] ;i++){
        this.details.push(reponse[i])
      } 
      
    });
 }
  ngOnInit() {
    this.customers();
  }
 crearCliente(){

  this.dialog.open(CrearClienteComponent,{
    panelClass:'crearCliente'
  }).afterClosed().subscribe(result => {
    this.customers();
    }) ;
 }

 eliminarCliente(cliente){

this.dialog.open(EliminarClienteComponent,{
    data: cliente
    //panelClass:'crearCliente'
  }).afterClosed().subscribe(() => {
    this.customers();
    });

  
 }
 actualizarCliente(cliente){
 console.log(cliente)
  this.dialog.open(ActualizarClienteComponent,{
      data: cliente
      //panelClass:'crearCliente'
    }).afterClosed().subscribe(() => {
      this.customers();
      });
  
    
   }

   crearSolicitud()
   {
    this.dialog.open(CrearSalasComponent,{
      //panelClass:'crearCliente'
    }).afterClosed().subscribe(result => {
      this.customers();
      }) ;
   }
   eliminarSolicitud()
   {
    this.dialog.open(EliminarSalasComponent,{
      //panelClass:'crearCliente'
    }).afterClosed().subscribe(result => {
      this.customers();
      }) ;
   }
   
  private builForm(){
    this.filtros = this.fb.group({
      f_inicial: ['', [Validators.required]],
      f_final: ['', [Validators.required]]
    }); 
  }

   filtroSolicitud()
   {
    //event.preventDefault();
    const data  = this.filtros.value;
    this.url = 'https://localhost:44382/api/Estados';
    this.services.metodoPost(this.url, data).subscribe((reponse)=>{
        console.log(reponse);
        this.details = []
        for(var i=0 ; i<reponse["length"] ;i++){
          this.details.push(reponse[i])
          }
        alertify.success("Filtro aplicado")
      },(Fail) =>{
        Fail.error.Detalle ? ( alertify.error(Fail.error.Message + ": " +Fail.error.Detalle)) : alertify.error(Fail.error.Message);
      });
   }
}
