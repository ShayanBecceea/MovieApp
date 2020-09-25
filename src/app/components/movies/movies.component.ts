import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../dto/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  categories: string;
  movieList: Movie[] = [];
  movieGenres: string[] = [];
  moviesListDisplayed: Movie[] = [];

  constructor(private _movieService: MovieService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMoviesList();
  }

  setCategories(text: string): void {
    this.categories = text;
    this.moviesListDisplayed = this.getByGenre(text);
  }

  // search value
  searchValue(value: string): void {
    this.moviesListDisplayed = this.getByTitle(value);
  }

  // get movies list and push into movie
  getMoviesList(): void {
    this._movieService.getMovies().subscribe((data: any[]) => {
      data.forEach(item => {
        var movie = new Movie();
        movie.genre = item.genres;
        movie.posterUrl = item.posterurl;
        movie.rating = item.imdbRating;
        movie.title = item.title;
        this.movieList.push(movie);
      });

      this.movieGenres = [...new Set(this.movieList.map(item => item.genre).join().split(","))];
      this.setCategories(this.movieGenres[0]);
    });
  }

  // seperate genre
  getByGenre (genre: string): Movie[] {
    var movies: Movie[] = [];
    this.movieList.forEach(item => {
      if (item.genre.includes(genre))  {
        movies.push(item);
      }
    });
    return movies;
  }

  // search for title - convert to lowercase
  getByTitle(title: string): Movie[] {
    var movies = this.movieList.filter((item) =>
    String(item.title.toLowerCase()).includes(title.toLowerCase()));
      return movies;
  }

  getMoviesFromApi(value: string): void {
    if (value === "upcoming") {
      this._movieService.fetchPopularMovies().subscribe(() => {
        this.categories = "Upcoming";
        this.moviesListDisplayed = this._movieService.movieList;;
      });
    }
    else if (value === "popular") {
      this._movieService.fetchUpcomingMovies().subscribe(() => {
        this.categories = "Popular";
        this.moviesListDisplayed = this._movieService.movieList;;
      });
    }
  }


}
