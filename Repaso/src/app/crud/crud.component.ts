import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  articulos = [{codigo: 1, descripcion: 'papas', precio: 10.55},
  {codigo: 2, descripcion: 'manzanas', precio: 12.10},
  {codigo: 3, descripcion: 'melon', precio: 52.30},
  {codigo: 4, descripcion: 'cebollas', precio: 17},
  {codigo: 5, descripcion: 'calabaza', precio: 20},
 ];
  formulario: FormGroup;

  constructor(private formu: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formu.group(
      {
       codigo: new FormControl(),
       descripcion: new FormControl(),
       precio: new FormControl()
      }
    );
  }
agregarq() {
  console.log('hola');
  for (let articulo of this.articulos ){
    if (this.formulario.get('codigo').value == articulo.codigo)
    {
      var bandera;
      bandera = 1;
    }
  }
}

}
