import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recurso } from '../model/recurso';

@Injectable({
  providedIn: 'root',
})
export class RecursosService {
  constructor(private http: HttpClient) {}

  getRecursos(): Observable<Recurso[]> {
    return this.http.get<Recurso[]>('./assets/data/recursos.json');
  }
}
