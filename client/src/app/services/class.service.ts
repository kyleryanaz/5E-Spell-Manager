import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: Http) { }

    //Read
    getClasses() {
      return this.http
        .get("http://localhost:3000/api/classes")
        .pipe(map(res => res.json()));
    }
  
    getClassById(id) {
      return this.http
        .get("http://localhost:3000/api/class/" + id)
        .pipe(map(res => res.json()));
    }
  
    //Create
    addClass(newClass) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      return this.http
        .post("http://localhost:3000/api/spell", newClass, {
          headers: headers
        })
        .pipe(map(res => res.json));
    }
  
    //Delete
    deleteClass(id) {
      return this.http
        .delete("http://localhost:3000/api/class/" + id)
        .pipe(map(res => res.json()));
    }
}
