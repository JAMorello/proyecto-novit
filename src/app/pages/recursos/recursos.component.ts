import { Component, OnInit } from '@angular/core';
import { RecursosService } from 'src/app/services/recursos.service';
import { Recurso } from 'src/app/model/recurso';
@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
})
export class RecursosComponent implements OnInit {
  recursos: Recurso[] = [];

  constructor(private _recursosService: RecursosService) {}

  ngOnInit(): void {
    this.cargarRecursos();
  }

  cargarRecursos() {
    this._recursosService
      .getRecursos()
      .subscribe((data) => (this.recursos = data));
  }
}
