import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MorePopularService {

  apiURL: string = environment.urlAPI;
  constructor(
    protected http: HttpClient
  ) { }

  getMorePopularMovies() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const token = user.payload.token;
    return this.http.get(
      `${this.apiURL}api/movies/popular`,
      {
        headers: {
          'Authorization': `bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
        observe: 'response'
      }
    );
  }
}
