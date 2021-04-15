import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from "../../../models/Movie";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public selectedMovie: Movie;
  public imageBaseUrl:string;

  constructor(
    private router: Router
  ) {
    this.selectedMovie = this.router.getCurrentNavigation().extras.state.film;
    this.imageBaseUrl = this.router.getCurrentNavigation().extras.state.imageBaseUrl;
  }

  ngOnInit(): void {
  }

}
