import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  observable$ = new EventEmitter<string>();
  constructor() { }

}
