import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../../../services/material.service';
import { Material } from '../../../user/Material.interface';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrl: './add-material.component.css',
})
export class AddMaterialComponent {
  constructor(private matService: MaterialService) {}

  material: Material = {};

  add() {
    this.matService.addMaterial(this.material);
  }
}
