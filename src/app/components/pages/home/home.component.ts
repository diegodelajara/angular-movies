import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login/login.service";
import { NowPlayingService } from "../../../services/movies/now-playing/now-playing.service";
import { MorePopularService } from "../../../services/movies/more-popular/more-popular.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nowPlayingMovies:Array<object>;
  public morePopularMovies:Array<object>;
  public imageBaseUrl:string;

  constructor(
    private _serviceNowPlaying: NowPlayingService,
    private _serviceMorePopular: MorePopularService,
    private _serviceLogin: LoginService
  ) { }

  getYear(date) {
    return date.split('-')[0];
  }

  getNowPlayingMovies() {
    this._serviceNowPlaying.getNowPlayingMovies().subscribe(
      (res:any) => {
        this.nowPlayingMovies = res.body.data;
        this.imageBaseUrl = res.body.imageBaseUrl;
      },
      error => {
        if(error.error.error === 'Unauthorized') {          
          this._serviceLogin.refreshToken().subscribe(
            (res:any) => {              
              sessionStorage.setItem('user', JSON.stringify(res.data));
            }
          )
        }
      }
    )
  }
  getMorePopulargMovies() {
    this._serviceMorePopular.getMorePopularMovies().subscribe(
      (res:any) => {
        this.morePopularMovies = res.body.data;
        this.imageBaseUrl = res.body.imageBaseUrl;
      },
      error => {
        if(error.error.error === 'Unauthorized') {          
          this._serviceLogin.refreshToken().subscribe(
            (res:any) => {
              sessionStorage.setItem('user', JSON.stringify(res.data.user));
              sessionStorage.setItem('refresh_token', res.data.payload.refresh_token);
              sessionStorage.setItem('token', res.data.payload.token);
              sessionStorage.setItem('type', res.data.payload.type);            
            }
          )
        }
      }
    )
  }

  ngOnInit(): void {
    this.getNowPlayingMovies();
    this.getMorePopulargMovies();
  }
}
