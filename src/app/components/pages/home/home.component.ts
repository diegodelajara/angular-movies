import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login/login.service";
import { NowPlayingService } from "../../../services/movies/now-playing/now-playing.service";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nowPlayingMovies:Array<object>;
  public imageBaseUrl:string;

  constructor(
    private _serviceNowPlaying: NowPlayingService,
    private _serviceLogin: LoginService
  ) { }

  ngOnInit(): void {
    this._serviceNowPlaying.getNowPlayingMovies().subscribe(
      (res:any) => {
        this.nowPlayingMovies = res.body.data;
        this.imageBaseUrl = res.body.imageBaseUrl;
      },
      error => {
        if(error.error.error === 'Unauthorized')
          this._serviceLogin.refreshToken().subscribe(
            (res:any) => {
              sessionStorage.setItem('user', JSON.stringify(res.data));
            }
          )
      }
    )
  }
}
