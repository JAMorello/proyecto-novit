import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { Usuario } from 'src/app/model/usuario';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioFormDialogComponent } from 'src/app/components/usuario-form-dialog/usuario-form-dialog.component';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  loading: boolean = true;
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
    private notifierService: NotifierService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getUsuarios();
  }

  getUsuarios() {
    this._usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.loading = false;
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  createUsuario(usuario: Usuario) {
    this.loading = true;
    this._usuariosService.createUsuario(usuario).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          'Se ha creado el usuario correctamente',
          'éxito'
        );
        this.getUsuarios();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  updateUsuario(usuario: Usuario) {
    this.loading = true;
    this._usuariosService.updateUsuario(usuario).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          'Se ha modificado el usuario correctamente',
          'éxito'
        );
        this.getUsuarios();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  deleteUsuario(id: number) {
    this.loading = true;
    this._usuariosService.deleteUsuario(id).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          `Se ha eliminado el usuario con id [${id}] correctamente`,
          'éxito'
        );
        this.getUsuarios();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  openUsuarioDialog(payload: Usuario) {
    let dialogRef = this.matDialog.open(UsuarioFormDialogComponent, {
      width: '700px',
      height: '400px',
      data: {
        payload: payload,
        action: 'editar',
      },
    });

    dialogRef.afterClosed().subscribe((formValues) => {
      if (formValues) {
        const updatedUsuario: Usuario = {
          idUsuario: payload.idUsuario,
          nombre: formValues.value.nombre,
          apellido: formValues.value.apellido,
          username: formValues.value.username,
          password: formValues.value.password,
          email: formValues.value.email,
          estado: formValues.value.estado === 'true',
        };
        this.updateUsuario(updatedUsuario);
      }
    });
  }
}
