import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-if-condicional',
  templateUrl: './if-condicional.component.html',
  styleUrls: ['./if-condicional.component.css']
})
export class IfCondicionalComponent implements OnInit {
  numero1: 0;
  numero2: 0;
  diferencia: number;
  cadena;
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }
  calcular() {
    this.diferencia = 0;
    console.log(this.formulario.value);
    console.log(this.formulario.get('numero1').value);
    if (this.formulario.get('numero1').value !== this.formulario.get('numero2').value) {
      if (this.formulario.get('numero1').value > this.formulario.get('numero2').value) {
        this.cadena = 'El numero ' + this.formulario.get('numero1').value + ' es mayor al numero ' + this.formulario.get('numero2').value;
        this.diferencia = this.formulario.get('numero1').value - this.formulario.get('numero2').value;
      } else {
        this.diferencia = this.formulario.get('numero2').value - this.formulario.get('numero1').value;
        this.cadena = 'El numero ' + this.formulario.get('numero2').value + ' es mayor al numero ' + this.formulario.get('numero1').value;
      }
  } else {
    this.cadena = 'Los numeros son iguales!!!!!!';
  }
}

}
