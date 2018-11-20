import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { User } from '../model/user';

export const ANONYMOUS_USER: User = {
  id: undefined,
  username: '',
  email: '',
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map (isLoggedIn => !isLoggedIn));
  constructor(
    private httpClient: HttpClient
  ) { }

  signUp(email: string, password: string, username: string) {
    return this.httpClient.post<User>('http://localhost:3333/api/v1/user', { email, password, username })
              .pipe(
                shareReplay(),
                tap(user => this.subject.next(user))
              );
  }

  signIn(email: string, password: string) {
    return this.httpClient.post<any>('http://localhost:3333/api/auth/login', { email, password })
              .pipe(
                shareReplay(),
                tap(response => this.subject.next(response.user)),
                map(response => response)
              );
  }

  logOut() {
    this.subject.next(ANONYMOUS_USER);
  }
}
