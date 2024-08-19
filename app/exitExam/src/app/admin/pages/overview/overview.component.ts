import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../../services/material.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  constructor(private matService: MaterialService, private userService: UserService) {}

  users: any = []
  materials: any

  ngOnInit(): void {
    this.refreshMaterialsList();
    this.refreshUsersList();

  }
   // Refresh The List
   refreshMaterialsList() {
    this.matService.getAllMaterials();
    this.matService._materials.subscribe((next) => {
      this.materials = next;
    });
  }
  refreshUsersList() {
    this.userService.getAllUsers();
    this.userService._users.subscribe((next) => {
      this.users = next;
    });
  }
}
