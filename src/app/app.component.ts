import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { _PROJECTLIST } from './shared/projectList';
import { ProjectList } from './shared/models/projectList.model';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  projects: ProjectList[]  = _PROJECTLIST;
  projectHeader:string;

  constructor(private router: Router){
    
  }

  routeToProject(proj:ProjectList){
    console.log(proj.route);
    this.router.navigate([proj.route]);
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
