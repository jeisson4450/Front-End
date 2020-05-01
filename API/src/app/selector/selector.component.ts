import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor() { }
  actual: number;
  ngOnInit() {
    this.actual = 0;
  }

  incrementar() {
    this.actual++;
  }
  decrementar() {
    this.actual--;
  }
  generar(numero: number) {
    this.actual = numero;
  }
}
