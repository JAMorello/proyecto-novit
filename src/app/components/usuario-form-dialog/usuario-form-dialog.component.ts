import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-form-dialog',
  templateUrl: './usuario-form-dialog.component.html',
  styleUrls: ['./usuario-form-dialog.component.css'],
})
export class UsuarioFormDialogComponent implements OnInit {
  formValues: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
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

  onSubmit() {}
}
