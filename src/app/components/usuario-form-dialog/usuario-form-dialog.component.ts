import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-usuario-form-dialog',
  templateUrl: './usuario-form-dialog.component.html',
  styleUrls: ['./usuario-form-dialog.component.css'],
})
export class UsuarioFormDialogComponent implements OnInit {
  formValues: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<UsuarioFormDialogComponent>,
    public fb: FormBuilder,
    private notifierService: NotifierService
  ) {
    const values = this.data.payload;
    this.formValues = this.fb.group({
      nombre: [values.nombre, Validators.required],
      apellido: [values.apellido, Validators.required],
      username: [values.username, Validators.required],
      password: [values.password, Validators.required],
      email: [values.email, Validators.required],
      estado: [String(values.estado).toLowerCase(), Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // Chequear si, al momento de editar el elemento, el usuario ingresó efectivamente datos nuevos
    const checkEnteredData = {
      ...this.data.payload,
      ...this.formValues.value,
    };
    if (this.data.payload === checkEnteredData) {
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
