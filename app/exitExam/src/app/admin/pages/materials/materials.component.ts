import { Component } from '@angular/core';
import { MaterialService } from '../../../services/material.service';
import { Material } from '../../../user/Material.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css',
})
export class MaterialsComponent {
  constructor(private matService: MaterialService, private router: Router) {}

  filterInput: any;
  materials: any;

  materialsFound: boolean = false;
  newMaterial: Material = {};

  selectedMaterialId = '';

  material: Material = {};

  ngOnInit(): void {
    this.refreshMaterialsList();
  }
  // Refresh The List
  refreshMaterialsList() {
    this.matService.getAllMaterials();
    this.matService._materials.subscribe((next) => {
      this.materials = next;
      this.materialsFound = true
    });
  }

  deleteMaterial(materialId: any) {
    this.router.navigate(['/admin/home/delete-material/', materialId]);
  }

  updateMaterial(materialId: any) {
    this.router.navigate(['/admin/home/edit-material/', materialId]);
  }
}
