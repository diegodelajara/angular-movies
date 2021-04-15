import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = environment.urlAPI;
  constructor(
    protected http: HttpClient
  ) { }

  refreshToken() {
    const refreshToken = sessionStorage.getItem('refresh_token')
    return this.http.post(
      `${this.apiURL}api/auth/refresh`,
      {
        "refresh_token": refreshToken
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    );
  }

  getAuth(username, password) {
    return this.http.post(
      `${this.apiURL}api/auth/login`,
      {
        "username": username,
        "password": password
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    );
  }
}
