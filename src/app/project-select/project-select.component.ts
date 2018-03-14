import { DataServiceService } from './../shared/Services/data-service.service';
import { ProjectList } from './../shared/models/projectList.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { _PROJECTLIST } from '../shared/projectList';
import { Router } from '@angular/router';



@Component({
  selector: 'app-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.css']
})
export class ProjectSelectComponent implements OnInit {

  // projectList: ProjectList[] = _PROJECTLIST;
  projectList: ProjectList[];

  constructor(private router: Router, 
    private dataService: DataServiceService) { }

  ngOnInit() {
      
    this.dataService.getProjectLists().subscribe(projects => {
         this.projectList = projects;
    });
         
  }

  receiveSelectedProj(proj:ProjectList){ 
      this.router.navigate([proj.route]);
  }

}
