import { Component, Input, OnInit } from '@angular/core';
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
  @Input() data: Rol | Recurso = { id: 0, nombre: '', estado: true };

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  getImg(estado: boolean) {
    if (this.origen === 'roles') {
      return estado ? 'rol-disponible' : 'rol-no-disponible';
    }
    return estado ? 'recurso-disponible' : 'recurso-no-disponible';
  }

  openSmallDialog(payload: Rol | Recurso) {
    this.matDialog.open(SmallFormDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        payload: payload,
        title: this.origen === 'roles' ? 'Rol' : 'Recurso',
        action: 'editar',
      },
    });
  }
}
