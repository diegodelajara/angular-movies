import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from "../../../models/Movie";
import { Actor } from "../../../models/Actor";
import { ActorsService } from "../../../services/movies/actors/actors.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public selectedMovie: Movie;
  public imageBaseUrl:string;
  public actors:Array<Actor>;

  constructor(
    private _actorsService: ActorsService,
    private router: Router
  ) {
    this.selectedMovie = this.router.getCurrentNavigation().extras.state.film;
    this.imageBaseUrl = this.router.getCurrentNavigation().extras.state.imageBaseUrl;
  }

  getActors() {
    this._actorsService.getActorsMovie(this.selectedMovie.id).subscribe(
      (res: any) => {
        this.actors = res.body.data;
      }
    )
  }
  
  ngOnInit(): void {
    this.getActors();
  }

}
