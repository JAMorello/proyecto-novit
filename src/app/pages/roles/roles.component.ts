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
    this.cargarRoles();
  }

  cargarRoles() {
    this._rolesService.getRoles().subscribe((data) => (this.roles = data));
  }
}
