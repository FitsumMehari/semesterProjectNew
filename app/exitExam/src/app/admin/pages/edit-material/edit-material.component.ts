import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../../services/material.service';
import { Material } from '../../../user/Material.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrl: './edit-material.component.css',
})
export class EditMaterialComponent implements OnInit {
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

  update() {
    this.matService.updateMaterial(this.material);
  }
}
