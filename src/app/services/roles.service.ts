import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';
import { Rol } from '../model/rol';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  baseUrl: string = '';

  constructor(private http: HttpClient, private jwtService: JwtService) {
    this.baseUrl = environment.baseUrl + 'Rol';
  }

  generateHeaders() {
    return {
      headers: new HttpHeaders().set('token', this.jwtService.getJwt()),
    };
  }

  getRoles() {
    return this.http.get<Rol[]>(this.baseUrl, this.generateHeaders());
  }

  getRol(id: number) {
    return this.http.get<Rol>(`${this.baseUrl}/${id}`, this.generateHeaders());
  }

  createRol(rol: Rol) {
    return this.http.post<Rol>(
      `${this.baseUrl}/Create`,
      rol,
      this.generateHeaders()
    );
  }

  updateRol(rol: Rol) {
    return this.http.put<Rol>(
      `${this.baseUrl}/Update/${rol.idRol}`,
      rol,
      this.generateHeaders()
    );
  }

  deleteRol(id: number) {
    return this.http.delete<Rol>(
      `${this.baseUrl}/Delete/${id}`,
      this.generateHeaders()
    );
  }
}
