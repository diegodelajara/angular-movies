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
    const token = sessionStorage.getItem('token');
    const type = sessionStorage.getItem('type');
    return this.http.get(
      `${this.apiURL}api/movies/popular`,
      {
        headers: {
          'Authorization': `${type} ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
        observe: 'response'
      }
    );
  }
}
