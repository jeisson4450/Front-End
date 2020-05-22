import { Component, OnInit } from '@angular/core';
import { OperacionesService } from '../operaciones.service';
import { IDepartamento } from '../IDepartamentos';
import { ICiudades } from '../ICiudades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '../Response';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Sala } from '../Sala';
declare let alertify:any;

@Component({
  selector: 'app-eliminar-salas',
  templateUrl: './eliminar-salas.component.html',
  styleUrls: ['./eliminar-salas.component.css']
})
export class EliminarSalasComponent implements OnInit {
urlMotivos: string ='';
  urlEstados: string ='';
  urlClientes: string ='';
  urlSalas: string ='';
  formularioSala: FormGroup;
  motivos:any;
  estados:any;
  clientes:any;
  salas:any;
  detalles:any[];
  quitar :Sala;
  constructor(private  services : OperacionesService , 
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EliminarSalasComponent>) { 
      this.builForm();
    }

  ngOnInit() {
    this.urlClientes = 'https://localhost:44382/api/Operaciones';
    this.services.metodoGet(this.urlClientes).subscribe(reponse =>{this.clientes = reponse});
    
  }

private builForm(){
    this.formularioSala = this.fb.group({
      fecha_evento: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
      id_motivo: ['', [Validators.required]],
      id_estado: ['', [Validators.required]],
      id_sala: ['', [Validators.required]],
      identificacion:['', [Validators.required]]
    });
}
ConsultarSalas(){
  const cliente ={
    identificacion :this.formularioSala.get('identificacion').value
  }

  var data = JSON.parse(JSON.stringify(cliente))
  this.urlSalas = 'https://localhost:44382/api/ObtenerSalas';
  this.services.metodoPost(this.urlSalas, data).subscribe(reponse =>{this.salas = reponse});
}
DetalleSala(){
  this.detalles = []
  for(let item of this.salas){
    if(item.id_sala == this.formularioSala.get('id_sala').value)
    {
      this.detalles.push(item);
    }
  }
}
eliminarsala(){
  this.urlSalas = 'https://localhost:44382/api/Salas';

  const data ={
    "id_sala" : this.formularioSala.get('id_sala').value
  }
 console.log(data)


  this.services.metodoDelete(this.urlSalas, data).subscribe((reponse)=>{
      console.log(reponse);
      this.dialogRef.close();
      alertify.success(reponse)
    },(Fail) =>{
      Fail.error.Detalle ? ( alertify.error(Fail.error.Message + ": " +Fail.error.Detalle)) : alertify.error(Fail.error.Message);
    });
}
close(){
  this.dialogRef.close();
}
}


