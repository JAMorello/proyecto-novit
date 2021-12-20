import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SmallFormDialogComponent } from '../small-form-dialog/small-form-dialog.component';
import { Rol } from 'src/app/model/rol';
import { Recurso } from 'src/app/model/recurso';
import { RecursosService } from 'src/app/services/recursos.service';
import { RolesService } from 'src/app/services/roles.service';
import { NotifierService } from 'src/app/services/notifier.service';
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
  loading: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private notifierService: NotifierService,
    private _rolesService: RolesService,
    private _recursosService: RecursosService
  ) {}

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

  handleDialog(data: any) {
    this.loading = true;
    const title = this.origen === 'roles' ? 'Rol' : 'Recurso';
    if (title === 'Rol') {
      this._rolesService.getRol(data.idRol).subscribe({
        next: (data) => {
          this.loading = false;
          this.openSmallDialog(data, title);
        },
        error: (error) => {
          this.loading = false;
          this.notifierService.showErrorNotification(error);
        },
      });
    } else {
      this._recursosService.getRecurso(data.idRecurso).subscribe({
        next: (data) => {
          this.loading = false;
          this.openSmallDialog(data, title);
        },
        error: (error) => {
          this.loading = false;
          this.notifierService.showErrorNotification(error);
        },
      });
    }
  }

  openSmallDialog(payload: any, title: string) {
    let dialogRef = this.matDialog.open(SmallFormDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        payload: payload,
        title: title,
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
