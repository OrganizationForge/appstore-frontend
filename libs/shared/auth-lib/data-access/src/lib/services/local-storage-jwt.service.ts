import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class LocalStorageJwtService {
  getItem(): Observable<User | null> {
    const data = localStorage.getItem('currentUser');
    if (data) {
      return of(JSON.parse(data));
    }
    return of(null);
  }

  setItem(data: User): Observable<User> {
    localStorage.setItem('currentUser', JSON.stringify(data));
    return of(data);
  }

  removeItem(): Observable<boolean> {
    localStorage.removeItem('currentUser');
    return of(true);
  }
}
