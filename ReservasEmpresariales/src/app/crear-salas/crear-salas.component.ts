import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperacionesService } from '../operaciones.service';
import { MatDialogRef } from '@angular/material';
declare let alertify:any;

@Component({
  selector: 'app-crear-salas',
  templateUrl: './crear-salas.component.html',
  styleUrls: ['./crear-salas.component.css']
})
export class CrearSalasComponent implements OnInit {
  urlMotivos: string ='';
  urlEstados: string ='';
  urlClientes: string ='';
  urlSalas: string ='';
  sala: FormGroup;
  motivos:any;
  estados:any;
  clientes:any=[];
  constructor(
    private  services : OperacionesService , 
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<CrearSalasComponent>) { this.builForm();  }

  ngOnInit() {

    this.urlMotivos = 'https://localhost:44382/api/Motivos';
    this.services.metodoGet(this.urlMotivos).subscribe(reponse =>{ this.motivos = reponse});

    this.urlEstados = 'https://localhost:44382/api/Estados';
    this.services.metodoGet(this.urlEstados).subscribe(reponse =>{ this.estados = reponse});

    this.urlClientes = 'https://localhost:44382/api/Operaciones';
    this.services.metodoGet(this.urlClientes).subscribe(reponse =>{this.clientes = reponse})
      
    };
  
  private builForm(){
    this.sala = this.fb.group({
      fecha_evento: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
      id_motivo: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
      id_estado: ['', [Validators.required]],
      identificacion:['', [Validators.required]]
    });   
  }
crearsala(event :Event){
    event.preventDefault();
    const data  = this.sala.value;
    this.urlSalas = 'https://localhost:44382/api/Salas  ';
    this.services.metodoPost(this.urlSalas, data).subscribe((reponse)=>{
        console.log(reponse);
        this.dialogRef.close();
        alertify.success(reponse)
      },(Fail) =>{
        console.log(Fail)
        Fail.error.Detalle ? ( alertify.error(Fail.error.Message + ": " +Fail.error.Detalle)) : alertify.error(Fail.error.Message);
      });
  }
  close(){
    this.dialogRef.close();
  }
  }

