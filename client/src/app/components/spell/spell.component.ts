import { SpellService } from "../../services/spell/spell.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-spell",
  templateUrl: "./spell.component.html",
  styleUrls: ["./spell.component.css"]
})
export class SpellComponent implements OnInit {

  id: number;
  private sub: any;
  public spellName: string;
  public spellSchool: string;
  public spellLevel: number;

  constructor(
    private route: ActivatedRoute,
    private spellService: SpellService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"].toString();
    });
    this.spellService.getSpellById(this.id).subscribe(spell => {
      this.spellName = spell.name;
      this.spellSchool = spell.school;
      this.spellLevel = spell.level;
    });
  }

  // getSpellColor(color){
  //   console.log(color);
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
