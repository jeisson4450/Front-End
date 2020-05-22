import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IDepartamento } from './IDepartamentos';
import { Observable } from 'rxjs';
import { ICiudades } from './ICiudades';
import { Response } from './Response';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  constructor(private http : HttpClient) { }

  metodoGet(url: string ){
 
    return this.http.get(url);

  }
  metodoPost(url: string , data :JSON) {
    return this.http.post<Response>(url,data);
  
  }
  metodoDelete(url: string , cliente ) {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: cliente,
    };
    return this.http.delete<Response>(url,options);

  }
  metodoPut(url: string , cliente){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: cliente,
    };
    return this.http.put<Response>(url,options.body,options);
  }
}
