import { Component, ViewChild, OnInit } from '@angular/core';
import { Selectorclase2Component } from './selectorclase2/selectorclase2.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private articulos2 = null;
  constructor(private http: HttpClient) {
    this.valor1 = 0;
    this.valor2 = 0;
    this.valor3 = 0;
    this.minimo = 2;
    this.maximo = 10;
  }

  ngOnInit() {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
      .subscribe(
        result => {
          this.articulos2 = result;
        },
        error => {
          console.log('problemas');
        }
      );
      }
  articulos = [{codigo: 1, descripcion: 'papas', precio: 10.55},
               {codigo: 2, descripcion: 'manzanas', precio: 12.10},
               {codigo: 3, descripcion: 'melon', precio: 52.30},
               {codigo: 4, descripcion: 'cebollas', precio: 17},
               {codigo: 5, descripcion: 'calabaza', precio: 20},
              ];

  title = 'API';
  @ViewChild ('selector1', null) selector1: Selectorclase2Component;
  @ViewChild ('selector2', null) selector2: Selectorclase2Component;
  minimo: number;
  maximo: number;
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string;
  bandera: boolean;

  aleatorio() {
    this.selector1.fijar(2);
    return Math.trunc(Math.random() * 6) + 1;
  }
  generar() {
    this.valor1 = this.aleatorio();
    this.valor2 = this.aleatorio();
    this.valor3 = this.aleatorio();
    if (this.valor1 === this.valor2 && this.valor1 === this.valor3) {
        this.resultado = 'GANO!!!!';
    } else {
      this.resultado = 'PERDIO!!!';
    }
    this.bandera = true;
  }


  mensaje = '';

  actualizar(t) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
  holi() {
    this.selector1.fijar(4);
  }
}
