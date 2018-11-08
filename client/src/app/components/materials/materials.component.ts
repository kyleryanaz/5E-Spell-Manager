import { Component, OnInit } from '@angular/core';
import { MaterialService } from "../../services/material/material.service";
import { MaterialFilterPipe } from '../../pipes/materialFilter/material-filter.pipe';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
  providers: [MaterialFilterPipe]
})
export class MaterialsComponent implements OnInit {

  constructor(private materialService: MaterialService) { }

  public materials = [];
  public searchTerm: String;

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials = () => {
    this.materialService.getMaterials().subscribe(materials => {
      this.materials = materials;
    });
  };

}
