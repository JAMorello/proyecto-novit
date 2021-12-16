import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recurso } from 'src/app/model/recurso';
import { Rol } from 'src/app/model/rol';
import { Usuario } from 'src/app/model/usuario';
import { SmallFormDialogComponent } from '../small-form-dialog/small-form-dialog.component';
import { UsuarioFormDialogComponent } from '../usuario-form-dialog/usuario-form-dialog.component';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Output() createEvent = new EventEmitter<any>();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  createItem(item: Usuario | Rol | Recurso) {
    this.createEvent.emit(item);
  }

  openSmallDialog() {
    let dialogRef = this.matDialog.open(SmallFormDialogComponent, {
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

    dialogRef.afterClosed().subscribe((formValues) => {
      if (formValues) {
        if (this.title === 'Roles') {
          const newRol: Rol = {
            idRol: Math.floor(Math.random() * 2147483647) + 1,
            nombre: formValues.value.nombre,
            estado: formValues.value.estado === 'true',
          };
          this.createItem(newRol);
        } else {
          const newRecurso: Recurso = {
            idRecurso: Math.floor(Math.random() * 2147483647) + 1,
            nombre: formValues.value.nombre,
            estado: formValues.value.estado === 'true',
          };
          this.createItem(newRecurso);
        }
      }
    });
  }

  openUsuarioDialog() {
    this.matDialog.open(UsuarioFormDialogComponent, {
      width: '700px',
      height: '400px',
      data: {
        payload: {
          id: 0,
          nombre: '',
          apellido: '',
          username: '',
          password: '',
          email: '',
          estado: true,
        },
        action: 'guardar',
      },
    });
  }
}
