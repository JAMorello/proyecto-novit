import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  baseUrl: string = '';

  constructor(private http: HttpClient, private jwtService: JwtService) {
    this.baseUrl = environment.baseUrl + 'Usuario';
  }

  generateHeaders() {
    return {
      headers: new HttpHeaders().set('token', this.jwtService.getJwt()),
    };
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.baseUrl, this.generateHeaders());
  }

  getUsuario(id: number) {
    return this.http.get<Usuario>(
      `${this.baseUrl}/${id}`,
      this.generateHeaders()
    );
  }

  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(
      `${this.baseUrl}/Create`,
      usuario,
      this.generateHeaders()
    );
  }

  updateUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(
      `${this.baseUrl}/Update/${usuario.idUsuario}`,
      usuario,
      this.generateHeaders()
    );
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${this.baseUrl}/Delete/${id}`, {
      ...this.generateHeaders(),
      responseType: 'text',
    });
  }
}
