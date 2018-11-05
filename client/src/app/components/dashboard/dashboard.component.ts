import { Component, OnInit } from "@angular/core";
import { SpellService } from "../../services/spell/spell.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private spellService: SpellService) { }

  public spells = [];

  ngOnInit() {
    this.getSpells();
  }

  getSpells = () => {
    this.spellService.getSpells().subscribe(spells => {
      this.spells = spells;
    });
  };
}
