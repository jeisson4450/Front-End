import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OperacionesService } from '../operaciones.service';
import { Cliente } from '../Cliente';
declare let alertify:any;
@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  url: string ='';
  constructor(public dialogRef: MatDialogRef<EliminarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,private  services : OperacionesService ) { console.log(data) }

  ngOnInit() {
  }

  eliminarCliente(){
    this.url = 'https://localhost:44382/api/Operaciones';
    this.services.metodoDelete(this.url, this.data).subscribe((reponse)=>{
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
