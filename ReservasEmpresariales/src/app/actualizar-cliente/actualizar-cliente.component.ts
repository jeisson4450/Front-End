import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OperacionesService } from '../operaciones.service';
import { Cliente } from '../Cliente';
declare let alertify:any;
@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  usuario: FormGroup;
  departamentos:any;
  ciudades: any;
  url: string ='';
  constructor(public dialogRef: MatDialogRef<ActualizarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data :Cliente,private  services : OperacionesService,
    public fb: FormBuilder) {
      this.builForm();  
      this.ConsularCiudad();
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
      identificacion: [this.data.identificacion, [Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
      apellido: [this.data.apellido, [Validators.required]],
      telefono: [this.data.telefono, [Validators.required]],
      correo: [this.data.correo, [Validators.required]],
      edad: [this.data.edad, [Validators.required]],
      id_departamento: [this.data.id_departamento, [Validators.required]],
      id_ciudad: [this.data.id_ciudad, [Validators.required]]
    });    
  }

    actualizarCliente(event :Event){
    event.preventDefault();
    const data  = this.usuario.value;
    this.url = 'https://localhost:44382/api/Operaciones';
    this.services.metodoPut(this.url, data).subscribe((reponse)=>{
        console.log(reponse);
        this.dialogRef.close();
        alertify.success(reponse)
      },(Fail) =>{
        Fail.error.Detalle ? ( alertify.error(Fail.error.Message + ": " +Fail.error.Detalle)) : alertify.error(Fail.error.Message);
      });
  }
}
