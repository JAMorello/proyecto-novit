import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-small-form-dialog',
  templateUrl: './small-form-dialog.component.html',
  styleUrls: ['./small-form-dialog.component.css'],
})
export class SmallFormDialogComponent implements OnInit {
  formValues: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
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
    console.log(this.formValues);
  }
}
