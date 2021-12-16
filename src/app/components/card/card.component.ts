import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SmallFormDialogComponent } from '../small-form-dialog/small-form-dialog.component';
import { Rol } from 'src/app/model/rol';
import { Recurso } from 'src/app/model/recurso';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() origen: string = '';
  @Input() data: any = { id: 0, nombre: '', estado: true };
  @Output() updateEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  getImg(estado: boolean) {
    if (this.origen === 'roles') {
      return estado ? 'rol-disponible' : 'rol-no-disponible';
    }
    return estado ? 'recurso-disponible' : 'recurso-no-disponible';
  }

  getIDofElement(data: any) {
    return data.idRol ? data.idRol : data.idRecurso;
  }

  updateItem(item: Rol | Recurso) {
    this.updateEvent.emit(item);
  }

  deleteItem(id: number) {
    this.deleteEvent.emit(id);
  }

  openSmallDialog(payload: any) {
    let dialogRef = this.matDialog.open(SmallFormDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        payload: payload,
        title: this.origen === 'roles' ? 'Rol' : 'Recurso',
        action: 'editar',
      },
    });

    dialogRef.afterClosed().subscribe((formValues) => {
      if (formValues) {
        if (this.origen === 'roles') {
          const updatedRol: Rol = {
            idRol: payload.idRol,
            nombre: formValues.value.nombre,
            estado: formValues.value.estado === 'true',
          };
          this.updateItem(updatedRol);
        } else {
          const updatedRecurso: Recurso = {
            idRecurso: payload.idRecurso,
            nombre: formValues.value.nombre,
            estado: formValues.value.estado === 'true',
          };
          this.updateItem(updatedRecurso);
        }
      }
    });
  }
}
