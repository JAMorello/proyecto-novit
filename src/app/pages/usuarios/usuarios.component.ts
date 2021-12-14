import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/model/usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = [
    'Nombre',
    'Apellido',
    'Username',
    'Password',
    'Email',
    'Estado',
    'Acciones',
  ];

  constructor(private _usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this._usuariosService
      .getUsuarios()
      .subscribe((data) => (this.usuarios = data));
  }
}
