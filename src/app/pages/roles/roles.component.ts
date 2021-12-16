import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Rol } from 'src/app/model/rol';
import { NotifierService } from 'src/app/services/notifier.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  roles: Rol[] = [];
  loading: boolean = true;

  constructor(
    private _rolesService: RolesService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getRoles();
  }

  getRoles() {
    this._rolesService.getRoles().subscribe({
      next: (data) => {
        this.roles = data;
        this.loading = false;
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  createRol(rol: Rol) {
    this.loading = true;
    this._rolesService.createRol(rol).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          'Se ha creado el rol correctamente',
          'éxito'
        );
        this.getRoles();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  updateRol(rol: Rol) {
    this.loading = true;
    this._rolesService.updateRol(rol).subscribe({
      next: (_) => {
        this.notifierService.showNotification(
          'Se ha modificado el rol correctamente',
          'éxito'
        );
        this.getRoles();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }

  deleteRol(id: number) {
    this.loading = true;
    this._rolesService.deleteRol(id).subscribe({
      next: (data) => {
        console.log(data);
        this.notifierService.showNotification(
          'Se ha eliminado el rol con id [${id}] correctamente',
          'éxito'
        );
        this.getRoles();
      },
      error: (error) => {
        this.notifierService.showErrorNotification(error);
        this.loading = false;
      },
    });
  }
}
