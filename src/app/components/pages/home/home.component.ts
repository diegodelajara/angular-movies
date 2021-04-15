import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login/login.service";
import { NowPlayingService } from "../../../services/movies/now-playing/now-playing.service";
import { MorePopularService } from "../../../services/movies/more-popular/more-popular.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nowPlayingMovies:Array<object>;
  public morePopularMovies:Array<object>;
  public imageBaseUrl:string;
  public nowPlayingPage: number = 2;
  public popularPage: number = 2;

  constructor(
    private router: Router,
    private _serviceNowPlaying: NowPlayingService,
    private _serviceMorePopular: MorePopularService,
    private _serviceLogin: LoginService
  ) { }

  loadHorizontalMoreMovies(e) {
    const {
      scrollWidth,
      scrollLeft,
      offsetWidth
    } = e.target;
    
    if (offsetWidth + scrollLeft >= scrollWidth) {
      this.getNowPlayingMovies(this.nowPlayingPage++)
    }
  }

  loadVerticalMoreMovies(e) {    
    const {
      offsetHeight,
      scrollTop,
      scrollHeight
    } = e.target;
        
    if (offsetHeight + scrollTop >= scrollHeight) {
      this.getMorePopulargMovies(this.popularPage++)
    }
  }

  detailMovie(film) {
    this.router.navigate(['detail', film.id], {
      state: {
        film: film,
        imageBaseUrl: this.imageBaseUrl
      }
    })
  }

  getYear(date) {
    return date.split('-')[0];
  }

  getNowPlayingMovies(page = 1) {
    this._serviceNowPlaying.getNowPlayingMovies(page).subscribe(
      (res:any) => {
        const data = res.body.data;
        this.nowPlayingMovies 
          ? data.map(item => this.nowPlayingMovies.push(item))
          : this.nowPlayingMovies = res.body.data;
        
        this.imageBaseUrl = res.body.imageBaseUrl;
      },
      error => {
        if(error.error.error === 'Unauthorized') {          
          this._serviceLogin.refreshToken().subscribe(
            (res:any) => {              
              sessionStorage.setItem('user', JSON.stringify(res.data.user));
            }
          )
        }
      }
    )
  }
  getMorePopulargMovies(page = 1) {
    this._serviceMorePopular.getMorePopularMovies().subscribe(
      (res:any) => {
        const data = res.body.data;
        this.morePopularMovies 
          ? data.map(item => this.morePopularMovies.push(item))
          : this.morePopularMovies = res.body.data;

        this.imageBaseUrl = res.body.imageBaseUrl;
      },
      error => {
        if(error.error.error === 'Unauthorized') {          
          this._serviceLogin.refreshToken().subscribe(
            (res:any) => {
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
