import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpellService {
  constructor(private http: Http) { }

  //Read
  getSpells() {
    return this.http
      .get("http://localhost:3000/api/spells")
      .pipe(map(res => res.json()));
  }

  getSpellById(id) {
    return this.http
      .get("http://localhost:3000/api/spell/" + id)
      .pipe(map(res => res.json()));
  }

  //Create
  addSpell(newSpell) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/api/spell", newSpell, {
        headers: headers
      })
      .pipe(map(res => res.json));
  }

  //Delete
  deleteSpell(id) {
    return this.http
      .delete("http://localhost:3000/api/spell/" + id)
      .pipe(map(res => res.json()));
  }
}
