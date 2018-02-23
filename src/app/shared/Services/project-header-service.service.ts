import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ProjectList } from '../models/projectList.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectHeaderServiceService {

  headerChange:Subject<ProjectList> = new Subject();

  constructor() { }

  emitProjectHeaderChange(projectHeader: ProjectList) {
    this.headerChange.next(projectHeader);
  }

}
