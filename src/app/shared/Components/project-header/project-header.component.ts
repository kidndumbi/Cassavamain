import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css']
})
export class ProjectHeaderComponent implements OnInit {

  @Input() projectHeader:string;

  constructor() { 
   }

  ngOnInit() {

       console.log(this.projectHeader);
  
  }

}
