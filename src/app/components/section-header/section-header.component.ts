import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SmallFormDialogComponent } from '../small-form-dialog/small-form-dialog.component';
import { UsuarioFormDialogComponent } from '../usuario-form-dialog/usuario-form-dialog.component';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openSmallDialog() {
    this.matDialog.open(SmallFormDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        payload: {
          id: 0,
          nombre: '',
          estado: true,
        },
        title: this.title === 'Roles' ? 'Rol' : 'Recurso',
        action: 'guardar',
      },
    });
  }

  openUsuarioDialog() {
    this.matDialog.open(UsuarioFormDialogComponent, {
      width: '700px',
      height: '400px',
      data: {
        id: 0,
        nombre: '',
        apellido: '',
        username: '',
        password: '',
        email: '',
        estado: true,
      },
    });
  }
}
