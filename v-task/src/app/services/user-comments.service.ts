import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, isEmpty, Observable, retry, shareReplay } from 'rxjs';
import { Comments } from '../models/comments-model';


@Injectable({
  providedIn: 'root'
})
export class UserCommentsService {
  cachedUsers: Observable<Comments[]>;

  constructor(private http:HttpClient) { }



  getUserComments(id:number):Observable<Comments[]>
  {
    return this.http.get<Comments[]>("https://jsonplaceholder.typicode.com/comments?postId="+id)
    .pipe(
      retry(2),
      catchError(err=>{
        throw 'Error occured, please try again. Details :'+ err;
      })
    )
  }
}
