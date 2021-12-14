import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/model/usuario';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioFormDialogComponent } from 'src/app/components/usuario-form-dialog/usuario-form-dialog.component';
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

  constructor(
    private _usuariosService: UsuariosService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this._usuariosService
      .getUsuarios()
      .subscribe((data) => (this.usuarios = data));
  }

  openUsuarioDialog(payload: Usuario) {
    this.matDialog.open(UsuarioFormDialogComponent, {
      width: '700px',
      height: '400px',
      data: {
        payload: payload,
        action: 'editar',
      },
    });
  }
}
