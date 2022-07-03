import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersCacheService {

  readonly CACHE_DURATION_IN_MINUTES = 5;

  private cache:{value: Observable<any>} = null;

  constructor() { }

  getValue(): Observable<any> {
    if (!this.cache) {
      return null;
    }

   

    return this.cache.value;
  }

  setValue(value: Observable<any>) {
    this.cache = {value};

  }

  clearCache() {
    this.cache = null;
  }
}

