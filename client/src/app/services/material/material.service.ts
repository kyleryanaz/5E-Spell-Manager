import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: Http) { }

  // Read
  getMaterials() {
    return this.http
      .get("http://localhost:3000/api/materials")
      .pipe(map(res => res.json()));
  }

  getMaterialById(id) {
    return this.http
      .get("http://localhost:3000/api/material/" + id)
      .pipe(map(res => res.json()));
  }

}
