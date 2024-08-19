import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';
import { Material } from '../user/Material.interface';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  constructor(private http: HttpClient, private router: Router) {}

  _materials: BehaviorSubject<any> = new BehaviorSubject([]);
  _material: BehaviorSubject<any> = new BehaviorSubject({});
  message!: string;
  response: any;

  setMaterials(materials: any) {
    this._materials.next(materials);
  }

  setMaterial(material: any) {
    this._material.next(material);
  }

  getMaterials(fieldofstudy: string) {
    const url = environment.apiURL + 'material/:' + fieldofstudy;

    const httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    this.http.get(url, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;

        this.setMaterials(next);
      },
      (error) => {}
    );
  }

  // For admin

  getAllMaterials() {
    const url = environment.apiURL + 'admin-material/:all';

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;

        this.setMaterials(next);
      },
      (error) => {}
    );
  }

  getSingleMaterial(materialId: any) {
    const url = environment.apiURL + 'admin-material/:' + materialId;

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions).subscribe((next) => {
      this.setMaterial(next);
    });
  }

  addMaterial(material: any) {
    const url = environment.apiURL + 'admin-material/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(url, material, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/materials']);
    });
  }

  deleteMaterial(materialId: any) {
    const url = environment.apiURL + 'admin-material/:' + materialId;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.delete(url, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/materials']);
    });
  }

  updateMaterial(material: any) {
    const url = environment.apiURL + 'admin-material/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.put(url, material, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/materials']);
    });
  }
}
