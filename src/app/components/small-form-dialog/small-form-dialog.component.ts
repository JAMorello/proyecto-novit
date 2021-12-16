import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Rol } from 'src/app/model/rol';

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
    if (this.formValues.status === 'VALID') {
      this.matDialogRef.close(this.formValues);
    }

    // TODO: WARNING MESSAGGE
  }
}
