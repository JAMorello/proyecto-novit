import { Component, OnInit } from '@angular/core';
import { RecursosService } from 'src/app/services/recursos.service';
import { Recurso } from 'src/app/model/recurso';
import { NotifierService } from 'src/app/services/notifier.service';
@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
})
export class RecursosComponent implements OnInit {
  recursos: Recurso[] = [];
  loading: boolean = true;

  constructor(
    private _recursosService: RecursosService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getRecursos();
  }

  getRecursos() {
    this._recursosService.getRecursos().subscribe({
      next: (data) => {
        this.recursos = data;
        this.loading = false;
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  createRecurso(recurso: Recurso) {
    this.loading = true;
    this._recursosService.createRecurso(recurso).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          'Se ha creado el recurso correctamente',
          'éxito'
        );
        this.getRecursos();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  updateRecurso(recurso: Recurso) {
    this.loading = true;
    this._recursosService.updateRecurso(recurso).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          'Se ha modificado el recurso correctamente',
          'éxito'
        );
        this.getRecursos();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  deleteRecurso(id: number) {
    this.loading = true;
    this._recursosService.deleteRecurso(id).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          `Se ha eliminado el recurso con id [${id}] correctamente`,
          'éxito'
        );
        this.getRecursos();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }
}
