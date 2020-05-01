import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
@Input() valor: number;
  constructor() { }

  ngOnInit() {
  }

}
