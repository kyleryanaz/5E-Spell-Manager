import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'materialFilter'
})
export class MaterialFilterPipe implements PipeTransform {

  transform(materials: any, searchTerm: any): any {
    // check if search is undefined
    if (searchTerm === undefined) return materials;
    // return updated spells array
    return materials.filter(function (material) {
      return material.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

}
