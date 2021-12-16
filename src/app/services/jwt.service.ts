import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  token: string = '';

  constructor() {
    this.token = environment.token;
  }

  getJwt(): string {
    return this.token;
  }
}
