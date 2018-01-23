import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {post} from 'selenium-webdriver/http';

@Injectable()
export class AuthenticationService {

  loginUrl: string = 'http://localhost:8000/api/oauth/token';
  httpHeader: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeader = new HttpHeaders();
    this.httpHeader.append('Content-Type','application/x-www-form-urlencoded');
    this.httpHeader.append('Authorization','Basic YXBpOnNlY3JldA==');

  }



  login(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http.post<any>(this.loginUrl, body
      ,{
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic YXBpOnNlY3JldA=='}
      }
    )
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
