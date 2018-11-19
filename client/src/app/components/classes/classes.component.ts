import { Component, OnInit } from '@angular/core';
import { ClassService } from "../../services/class/class.service";
import { ClassFilterPipe } from './../../pipes/classFilter/class-filter.pipe';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  providers: [ClassFilterPipe]
})
export class ClassesComponent implements OnInit {

  constructor(private classService: ClassService) { }

  public classes = [];
  public searchTerm: String;

  ngOnInit() {
    this.getClasses();
  }

  getClasses = () => {
    this.classService.getClasses().subscribe(classes => {
      console.log(classes);
      this.classes = classes;
    });
  };

}
