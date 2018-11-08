import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material/material.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  private sub: any;
  private shortId: string;
  private materialName: string;

  constructor(
    private route: ActivatedRoute,
    private materialService: MaterialService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.shortId = params["id"].toString();
    });
    this.materialService.getMaterialById(this.shortId).subscribe(material => {
      this.materialName = material.name;
      this.shortId = material.shortId;
    });
  }

}
