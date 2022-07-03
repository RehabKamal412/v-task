import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { UserPosts } from '../models/user-posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

postId$ : BehaviorSubject<number> = new BehaviorSubject<number>(null);

  cachedUsers: Observable<UserPosts[]>;


  constructor(private http:HttpClient) { }
   
  getUserPosts(userId:number):Observable<UserPosts[]>
  {
    return this.http.get<UserPosts[]>("https://jsonplaceholder.typicode.com/posts?userId="+userId)
    
  }

 

}
