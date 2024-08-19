import { Component } from '@angular/core';
import { MaterialService } from '../../../services/material.service';
import { AuthService } from '../../../services/auth.service';
import { Material } from '../../../user/Material.interface';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css',
})
export class MaterialsComponent {
  constructor(private matService: MaterialService, private auth: AuthService) {}

  filterInput: any;
  materials: any;

  newMaterial: Material = {};

  selectedMaterialId = '';

  material: Material = {};

  buttonStatus = 'Add Material';

  ngOnInit(): void {
    this.refreshMaterialsList();
  }
  // Refresh The List
  refreshMaterialsList() {
    this.matService.getAllMaterials();
    this.matService._materials.subscribe((next) => {
      this.materials = next;
    });
  }

  addMaterial() {
    if (this.buttonStatus == 'Add Material') {
      this.matService.addMaterial(this.newMaterial);
      this.newMaterial = {
        title: '',
        fieldofstudy: '',
        materialURL: '',
      };
      this.refreshMaterialsList();
    } else if (this.buttonStatus == 'Update Material') {
      this.updateMaterial(this.selectedMaterialId);
    }
  }

  deleteMaterial(materialId: any) {
    this.materials.forEach((material: any) => {
      if (material._id == materialId) {
        let toDelete = confirm(
          'Are you sure you want to delete ' + material.title + '?'
        );

        if (toDelete) {
          this.matService.deleteMaterial(materialId);
        }
      }
    });
    // Refresh The List
    this.refreshMaterialsList();
  }

  selectMaterial(materialId: any) {
    this.materials.forEach((material: any) => {
      if (material._id == materialId) {
        this.selectedMaterialId = material._id;
        this.newMaterial = material;

        this.buttonStatus = 'Update Material';
        // console.log(this.newUser);
      }
    });
  }

  updateMaterial(materialId: any) {
    this.materials.forEach((material: any) => {
      if (material._id == materialId) {
        let toUpdate = confirm(
          'Are you sure you want to update ' + material.title + '?'
        );

        if (toUpdate) {
          this.matService.updateMaterial(material);
          this.newMaterial = {
            title: '',
            fieldofstudy: '',
            materialURL: '',
          };
          this.buttonStatus = 'Add Material';
          // Refresh The List
          this.refreshMaterialsList();
        }
      }
    });
  }
}
