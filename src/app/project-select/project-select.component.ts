import { ProjectList } from './../shared/models/projectList.model';
import { Component, OnInit } from '@angular/core';
import { _PROJECTLIST } from '../shared/projectList';


@Component({
  selector: 'app-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.css']
})
export class ProjectSelectComponent implements OnInit {

  projectList: ProjectList[] = _PROJECTLIST;

  constructor() { }

  ngOnInit() {

  }

}
