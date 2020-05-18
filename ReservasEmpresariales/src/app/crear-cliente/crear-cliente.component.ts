import { Component, OnInit } from '@angular/core';
import { OperacionesService } from '../operaciones.service';
import { IDepartamento } from '../IDepartamentos';
import { ICiudades } from '../ICiudades';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '../Response';
declare let alertify:any;

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  url: string ='';
  departamentos:any;
  ciudades: any;

  usuario: FormGroup;

  constructor(private  services : OperacionesService , public fb: FormBuilder) { 
    this.builForm();
   
  }
  

  ngOnInit() {
    this.url = 'https://localhost:44382/api/Ubicacion';
    this.services.metodoGet(this.url).subscribe(reponse =>this.departamentos = reponse);
    
  }

  ConsularCiudad(){
     const departamento ={
      id_departamento :this.usuario.get('id_departamento').value
    }
     var data = JSON.parse(JSON.stringify(departamento))
    this.url = 'https://localhost:44382/api/Ubicacion';
    this.services.metodoPost(this.url, data).subscribe(reponse =>this.ciudades = reponse);

  }

  private builForm(){
    this.usuario = this.fb.group({
      identificacion: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      id_departamento: ['', [Validators.required]],
      id_ciudad: ['', [Validators.required]],
    });    
  }
  crearcliente(event :Event){
    event.preventDefault();
    const data  = this.usuario.value;
    this.url = 'https://localhost:44382/api/Operaciones';
    this.services.metodoPost(this.url, data).subscribe((reponse)=>{
        console.log(reponse);
        alertify.success(reponse.Message)
      },(Fail) =>{
        console.log(Fail)
        console.log(Fail.error.Detalle)
        alertify.error(Fail.error.Message +": " +Fail.error.Detalle);
        
      });
  }
}
