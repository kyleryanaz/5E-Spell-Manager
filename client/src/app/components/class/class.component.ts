import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  private sub: any;
  private shortId: string;
  private className: string;
  private hitDie: string;
  private description: string;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.shortId = params["id"].toString();
    });
    this.classService.getClassById(this.shortId).subscribe(gameClass => {
      this.className = gameClass.name;
      this.shortId = gameClass.shortId;
      this.hitDie = gameClass.hitDie;
      this.description = gameClass.description;
    });
  }

}
