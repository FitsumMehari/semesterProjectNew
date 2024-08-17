import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Material } from '../../Material.interface';
import { MaterialService } from '../../../services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css',
})
export class MaterialsComponent implements OnInit {
  constructor(private auth: AuthService, private matService: MaterialService) {}

  fieldofstudy: string | undefined;
  materials: any;

  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.fieldofstudy = next.fieldofstudy;

      if (this.fieldofstudy) {
        this.matService.getMaterials(this.fieldofstudy);
        this.matService._materials.subscribe((next) => {
          this.materials = next;
        });
      }
    });
  }

  downloadMaterial(materialURL: string) {
    console.log(materialURL);

  }
}
