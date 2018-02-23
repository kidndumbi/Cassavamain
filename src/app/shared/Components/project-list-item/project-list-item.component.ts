import { ProjectList } from './../../models/projectList.model';
import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent implements OnInit {

@Input() project:ProjectList;
@Output() selected = new EventEmitter<ProjectList>()

  constructor() { }

  ngOnInit() {

  }

  selectedProject(){
       this.selected.emit(this.project);
  }

}
