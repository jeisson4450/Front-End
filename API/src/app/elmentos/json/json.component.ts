import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JSONComponent  {
  private articulos2 = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://scratchya.com.ar/vue/datos.php')
      .subscribe(
        result => {
          this.articulos2 = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }

}
