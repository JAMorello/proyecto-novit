import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';
import { Recurso } from '../model/recurso';

@Injectable({
  providedIn: 'root',
})
export class RecursosService {
  baseUrl: string = '';

  constructor(private http: HttpClient, private jwtService: JwtService) {
    this.baseUrl = environment.baseUrl + 'Recurso';
  }

  generateHeaders() {
    return {
      headers: new HttpHeaders().set('token', this.jwtService.getJwt()),
    };
  }

  getRecursos() {
    return this.http.get<Recurso[]>(this.baseUrl, this.generateHeaders());
  }

  getRecurso(id: number) {
    return this.http.get<Recurso>(
      `${this.baseUrl}/${id}`,
      this.generateHeaders()
    );
  }

  createRecurso(recurso: Recurso) {
    return this.http.post<Recurso>(
      `${this.baseUrl}/Create`,
      recurso,
      this.generateHeaders()
    );
  }

  updateRecurso(recurso: Recurso) {
    return this.http.put<Recurso>(
      `${this.baseUrl}/Update/${recurso.idRecurso}`,
      recurso,
      this.generateHeaders()
    );
  }

  deleteRecurso(id: number) {
    return this.http.delete(`${this.baseUrl}/Delete/${id}`, {
      ...this.generateHeaders(),
      responseType: 'text',
    });
  }
}
