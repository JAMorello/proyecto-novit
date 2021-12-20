import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotifierService } from 'src/app/services/notifier.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-small-form-dialog',
  templateUrl: './small-form-dialog.component.html',
  styleUrls: ['./small-form-dialog.component.css'],
})
export class SmallFormDialogComponent implements OnInit {
  formValues: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<SmallFormDialogComponent>,
    public fb: FormBuilder,
    private notifierService: NotifierService
  ) {
    const values = this.data.payload;
    this.formValues = this.fb.group({
      nombre: [values.nombre, Validators.required],
      estado: [String(values.estado).toLowerCase(), Validators.required],
    });
  }

  ngOnInit(): void {}

  getImg() {
    return this.data.title === 'Rol' ? 'roles' : 'recursos';
  }

  onSubmit() {
    // Chequear si, al momento de editar el elemento, el usuario ingresó efectivamente datos nuevos
    const checkEnteredData = {
      ...this.data.payload,
      ...this.formValues.value,
    };
    checkEnteredData.estado = checkEnteredData.estado === 'true';

    if (_.isEqual(this.data.payload, checkEnteredData)) {
      this.notifierService.showNotification(
        'No hay datos nuevos ingresados',
        'error'
      );
      // Si hay datos nuevos, verificar que el estatus del formulario sea válido; si lo es, enviar datos
    } else if (this.formValues.status === 'VALID') {
      this.matDialogRef.close(this.formValues);
      // Tirar error si los datos ingresados son inválidos
    } else {
      this.notifierService.showNotification(
        'No has completado los campos correctamente',
        'error'
      );
    }
  }
}
