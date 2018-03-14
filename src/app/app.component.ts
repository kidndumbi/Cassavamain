import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { _PROJECTLIST } from './shared/projectList';
import { ProjectList } from './shared/models/projectList.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  projects: ProjectList[]  = _PROJECTLIST;
  projectHeader:string;

  constructor(private router: Router){
    
  }

  routeToProject(proj:ProjectList){
    console.log(proj.route);
    //this.headerService.emitProjectHeaderChange(proj);
    this.router.navigate([proj.route]);
  }

}
