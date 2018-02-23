import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { _PROJECTLIST } from './shared/projectList';
import { ProjectList } from './shared/models/projectList.model';
import { ProjectHeaderServiceService } from './shared/Services/project-header-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  projects: ProjectList[]  = _PROJECTLIST;
  projectHeader:string;

  constructor(private router: Router, private headerService: ProjectHeaderServiceService){

     this.headerService.headerChange.subscribe(newHeader => {
          console.log(newHeader);
          this.projectHeader = newHeader.name;
     });
    
  }

  routeToProject(proj:ProjectList){
    console.log(proj.route);
    this.headerService.emitProjectHeaderChange(proj);
    this.router.navigate([proj.route]);
  }

}
