import { Component, OnInit } from '@angular/core';
import { SpellService } from "../../services/spell/spell.service";
import { SpellFilterPipe } from './../../pipes/spellFilter/spell-filter.pipe';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css'],
  providers: [SpellFilterPipe]
})
export class SpellsComponent implements OnInit {

  constructor(private spellService: SpellService) { }

  public spells = [];
  public searchTerm: String;

  ngOnInit() {
    this.getSpells();
  }

  getSpells = () => {
    this.spellService.getSpells().subscribe(spells => {
      console.log(spells);
      this.spells = spells;
    });
  };

}
