import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario-form-dialog',
  templateUrl: './usuario-form-dialog.component.html',
  styleUrls: ['./usuario-form-dialog.component.css'],
})
export class UsuarioFormDialogComponent implements OnInit {
  formValues: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    public fb: FormBuilder
  ) {
    this.formValues = this.fb.group({
      nombre: [this.data.nombre, Validators.required],
      apellido: [this.data.apellido, Validators.required],
      username: [this.data.username, Validators.required],
      password: [this.data.password, Validators.required],
      email: [this.data.email, Validators.required],
      estado: [this.data.estado, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {}
}
