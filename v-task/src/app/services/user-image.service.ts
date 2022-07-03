import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { UserPosts } from '../models/user-posts';

@Injectable({
  providedIn: 'root'
})
export class UserImageService {

  cachedUsers: Observable<UserPosts>;

  constructor(private http: HttpClient) { }

  getUserImage(): Observable<UserPosts> {
    if (!this.cachedUsers) {

      this.cachedUsers = this.http.get<UserPosts>('https://picsum.photos/v2/list?page=1&limit=10')
        .pipe(
          shareReplay(1)
        )
      }
      return this.cachedUsers;
  }
}
