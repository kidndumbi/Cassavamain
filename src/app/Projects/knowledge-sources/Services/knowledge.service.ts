import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class KnowledgeService {

  constructor(private http: HttpClient) { }

  getAllKnowledgeSources():Observable<any>{
     return this.http.get('https://cassavamainbackend.herokuapp.com/api/knowledgeapi')
     .pipe(
      catchError(this.handleError)
     );
  }
///:id/:source_id
  deleteSource(parnetId: string, sourceId: string):Observable<any>{
    return this.http.delete(`https://cassavamainbackend.herokuapp.com/api/knowledgeapi/${parnetId}/${sourceId}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}
