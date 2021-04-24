import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  // Проверьте JWT в localstorage с помощью сервера и загрузите информацию пользователя.
  // Это выполняется один раз при запуске приложения.
  populate() {
    // Если JWT обнаружен, попытайтесь получить и сохранить информацию пользователя
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Удалите любые потенциальные остатки предыдущих состояний аутентификации
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Сохранить JWT, отправленный с сервера в localstorage
    this.jwtService.saveToken(user.token);
    // Установите текущие пользовательские данные в наблюдаемые
    this.currentUserSubject.next(user);
    // Установите IsAuthenticated в true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Удалить JWT из localstorage
    this.jwtService.destroyToken();
    // Установите текущего пользователя в пустой объект
    this.currentUserSubject.next({} as User);
    // Установите статус auth в false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Обновите пользователя на сервере (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      // Обновите CurrentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }

}
