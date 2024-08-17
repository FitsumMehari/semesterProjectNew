import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  constructor(private http: HttpClient) {}

  _materials: BehaviorSubject<any> = new BehaviorSubject([]);
  message!: string;
  response: any;

  setMaterials(materials:any) {
    this._materials.next(materials)
  }

  getMaterials(fieldofstudy:string) {
    const url = environment.apiURL + 'material/:'+ fieldofstudy;

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
}
