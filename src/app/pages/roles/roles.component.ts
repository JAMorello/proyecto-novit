import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Rol } from 'src/app/model/rol';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  roles: Rol[] = [];

  constructor(private _rolesService: RolesService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this._rolesService.getRoles().subscribe((data) => (this.roles = data));
  }

  createRol(rol: Rol) {
    this._rolesService.createRol(rol).subscribe((_) => this.getRoles());
  }

  updateRol(rol: Rol) {
    this._rolesService.updateRol(rol).subscribe((_) => this.getRoles());
  }

  deleteRol(id: number) {
    this._rolesService.deleteRol(id).subscribe((data) => console.log(data));
  }
}
