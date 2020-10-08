import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieDetails } from  '../../dto/movie-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  myDate = new Date();

  movieDetails: MovieDetails;
  displayrating: boolean = false;
  genreList: string[];
  currentIndex: any = -1;
  showFlag: any = false;
  image: Array<object>;

  constructor(private route: ActivatedRoute,private _movieService: MovieService,private router: Router) {}

  ngOnInit(): void {
    this.getMovieId();
    this.getGenresList();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  //get movie id
  getMovieId(): void {
    this.route.paramMap.subscribe(params => {
      this.getMovieDetails(+params.get('id'));
    });
  }

  // display movie details
  getMovieDetails(movieId: number): void {
    this._movieService.getMovieDetails(movieId)
    .subscribe((movieDetails: MovieDetails) => {
      this.movieDetails = movieDetails;
    });

    this._movieService.getMovieGallery(movieId).subscribe((response) => {
      this.image = response;
    });
  }

  // get genre list
  getGenresList(): void {
    this._movieService.fetchMovieGenres().subscribe((data: string[]) => {
      this.genreList = data;
    });
  }

  //sidebar categories click event
  selectedGenre(genre: string): void {
    this.router.navigate(['/movie'],
    {queryParams: {genre}});
  }

  rateMovie(value) {
    this.displayrating = !this.displayrating;
  }

  lightboxClose(){
    this.displayrating = null;
  }
}
