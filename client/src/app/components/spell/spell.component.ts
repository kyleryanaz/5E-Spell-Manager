import { SpellService } from "../../services/spell/spell.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-spell",
  templateUrl: "./spell.component.html",
  styleUrls: ["./spell.component.css"]
})
export class SpellComponent implements OnInit {

  private id: number;
  private shortId: string;
  private sub: any;
  private spellCastingTime: String;
  // Todo: Class Interface
  private spellClasses: Array<String> = [];
  private spellConcentration: boolean;
  private spellConsumes: boolean;
  private spellDuration: string;
  private spellEffect: string;
  private spellLevel: number;
  // Todo: Material Interface
  private spellMaterials: Array<String> = [];
  private spellName: string;
  private spellRange: string;
  private spellSchool: string;

  constructor(
    private route: ActivatedRoute,
    private spellService: SpellService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.shortId = params["id"].toString();
    });
    this.spellService.getSpellById(this.shortId).subscribe(spell => {
      this.spellCastingTime = spell.castingTime;
      this.spellClasses = spell.classes;
      this.spellConcentration = spell.concentration;
      this.spellConsumes = spell.consumes;
      this.spellDuration = spell.duration;
      this.spellEffect = spell.effect;
      this.spellLevel = spell.level;
      this.spellMaterials = spell.materials;
      this.spellName = spell.name;
      this.spellRange = spell.range;
      this.spellSchool = spell.school;
    });
  }

  // test() {
  //   console.log(this.spellMaterials);
  // }

  // getSpellColor(color){
  //   console.log(color);
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
