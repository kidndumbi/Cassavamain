import { ProjectList } from './../models/projectList.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getProjectLists():Observable<any>{   
     return this.http.get('https://cassavamainbackend.herokuapp.com/api/cassavamain')
  }

}
