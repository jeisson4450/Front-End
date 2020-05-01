import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectorclase2',
  templateUrl: './selectorclase2.component.html',
  styleUrls: ['./selectorclase2.component.css']
})
export class Selectorclase2Component implements OnInit {
  @Input() minimo;
  @Input() maximo;
  actual: number;
  constructor() { }

  ngOnInit() {
    this.actual = +this.minimo;
    this.maximo = +this.maximo;
  }

  incrementar() {
    if (this.actual < this.maximo) {
        this.actual++;
    }
  }

  decrementar() {

    if (this.actual > this.minimo) {
      this.actual--;
    }
  }

  fijar(v) {
    if (v >= this.minimo && v <= this.maximo) {
      this.actual = v;
    }
  }

}
