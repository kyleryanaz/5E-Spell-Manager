import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classFilter'
})
export class ClassFilterPipe implements PipeTransform {

  transform(classes: any, searchTerm: any): any {
    // check if search is undefined
    if (searchTerm === undefined) return classes;
    // return updated spells array
    return classes.filter(function (gameClass) {
      return gameClass.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
