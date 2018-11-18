import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spellFilter'
})
export class SpellFilterPipe implements PipeTransform {

  transform(spells: any, searchTerm: any): any {
    // check if search is undefined
    if (searchTerm === undefined) return spells;
    // return updated spells array
    return spells.filter(function (spell) {
      return spell.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
