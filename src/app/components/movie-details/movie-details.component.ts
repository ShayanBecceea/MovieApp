import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieDetails } from  '../../dto/movie-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: MovieDetails;

  genreList: string[];

  constructor(private route: ActivatedRoute,private _movieService: MovieService,private router: Router) {}

  ngOnInit(): void {
    this.getMovieId();
    this.getGenresList();
  }

  getMovieId(): void {
    this.route.paramMap.subscribe(params => {
      this.getMovieDetails(+params.get('id'));
    });
  }

  getMovieDetails(movieId: number): void {
    this._movieService.getMovieDetails(movieId)
    .subscribe((movieDetails: MovieDetails) => {
      this.movieDetails = movieDetails;
    });
  }

  getGenresList(): void {
    this._movieService.fetchMovieGenres().subscribe((data: string[]) => {
      this.genreList = data;
    });
  }

  selectedGenre(genreClicked: string): void {
    this.router.navigate(['/movie'], {queryParams: {action:'menu', genre:genreClicked}});
  }

}