import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, BehaviorSubject } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

userId$ : BehaviorSubject<number> = new BehaviorSubject<number>(null)


  cachedUsers: Observable<Users[]>;

  constructor(private http:HttpClient) { }

  getUsersData():Observable<Users[]>
  {
    
      return this.http.get<Users[]>("https://jsonplaceholder.typicode.com/users")
      
      
  }

  getUser(userId:number):Observable<Users>
  {
     return this.http.get<Users>("https://jsonplaceholder.typicode.com/users/"+userId)
    
  }
}
