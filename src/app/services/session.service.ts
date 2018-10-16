import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private http: Http) { }
  handleError(e) {
    return throwError(e.json().message);
  }



  signup(user) {
    return this.http.post(`${environment.API_URL}/signup`, user).pipe(map(res => res.json()),catchError(this.handleError));
  }

  login(user) {
    console.log('user;m]', user)
    return this.http.post(`${environment.API_URL}/login`, user, {withCredentials:true}).pipe(map(res => res.json()), catchError(this.handleError));
  }

  logout() {
    return this.http.post(`${environment.API_URL}/logout`, {}, {withCredentials: true}).pipe(map(res => res.json()), catchError(this.handleError));
  }

  isLoggedIn() {
    return this.http.get(`${environment.API_URL}/loggedin`, {withCredentials: true})
    .pipe(map(res =>
      res.json()
    ),
    catchError(this.handleError)
  );
      
  }

  getPrivateData() {
    return this.http.get(`${environment.API_URL}/private`, {withCredentials:true}).pipe(map(res => res.json()),catchError(this.handleError));
  }
}
