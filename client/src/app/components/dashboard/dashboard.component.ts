import { Component, OnInit } from "@angular/core";
// import { NgForm } from '@angular/forms';
import { SpellService } from "../../services/spell/spell.service";
import { SpellFilterPipe } from './../../pipes/spellFilter/spell-filter.pipe';


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [SpellFilterPipe]
})
export class DashboardComponent implements OnInit {
  constructor(private spellService: SpellService) { }

  public spells = [];
  public searchTerm: String;

  ngOnInit() {
    this.getSpells();
  }

  getSpells = () => {
    this.spellService.getSpells().subscribe(spells => {
      this.spells = spells;
    });
  };
}
