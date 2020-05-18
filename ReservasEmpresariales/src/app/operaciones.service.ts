import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDepartamento } from './IDepartamentos';
import { Observable } from 'rxjs';
import { ICiudades } from './ICiudades';
import { Response } from './Response';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  constructor(private http : HttpClient) { }

  metodoGet(url: string){

    return this.http.get(url);

  }
  metodoPost(url: string , data :JSON) {
    return this.http.post<Response>(url,data);

  }
}
