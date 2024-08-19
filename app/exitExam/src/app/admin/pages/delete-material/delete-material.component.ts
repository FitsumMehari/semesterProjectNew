import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../../../services/material.service';
import { Material } from '../../../user/Material.interface';

@Component({
  selector: 'app-delete-material',
  templateUrl: './delete-material.component.html',
  styleUrl: './delete-material.component.css',
})
export class DeleteMaterialComponent implements OnInit {
  constructor(
    private matService: MaterialService,
    private activatedRoute: ActivatedRoute
  ) {}

  material: Material = {};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.matService.getSingleMaterial(params['materialId']);
      this.matService._material.subscribe((next) => {
        this.material = next[0];
      });
    });
  }

  delete() {
    this.matService.deleteMaterial(this.material._id);
  }
}
