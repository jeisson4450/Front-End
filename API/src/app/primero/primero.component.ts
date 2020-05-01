import { Component } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent {

    art = {
      codigo: null,
      descripcion: null,
      precio: null
      }
    articulos = [{codigo: 1, descripcion: 'papas', precio: 10.55},
                 {codigo: 2, descripcion: 'manzanas', precio: 12.10},
                 {codigo: 3, descripcion: 'melon', precio: 52.30},
                 {codigo: 4, descripcion: 'cebollas', precio: 17},
                 {codigo: 5, descripcion: 'calabaza', precio: 20},
                ];
    hayRegistros() {
      return this.articulos.length > 0;
    }

    borrar(art) {
      for (let i = 0; i <= this.articulos.length; i++) {
        if (this.articulos[i].codigo === art.codigo) {
              this.articulos.splice(i, 1);
        }

      }

    }
    agregar() {
      for (const articulo of this.articulos) {
      if (articulo.codigo === this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    }
      this.articulos.push({codigo: this.art.codigo,
                           descripcion: this.art.descripcion,
                           precio: this.art.precio });
      this.art.codigo = null;
      this.art.descripcion = null;
      this.art.precio = null;
    }

    seleccionar(art) {
      this.art.codigo = art.codigo;
      this.art.descripcion = art.descripcion;
      this.art.precio = art.precio;
    }

    modificar() {
      var contador = 0;
      for (const articulo of this.articulos) {

        if (articulo.codigo === this.art.codigo) {
            articulo.precio = this.art.precio;
            this.art.codigo = null;
            this.art.precio = null;
        } else {
          contador++;
        }

      }
      if (contador === this.articulos.length){
          alert('El articulo no existe');
      }

    }


}
