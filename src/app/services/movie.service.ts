import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../dto/movie';
import { MovieDetails } from '../dto/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movieList: Movie[];

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.http.get("../assets/movies.json");
  }
  get movieList(): Movie[] {
    return this._movieList;
  }


 fetchPopularMovies(): Observable<any> {
  this._movieList = [];
  return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((data: any) => {
    if (data != null) {
      data.results.forEach(element => {
        const movie: Movie = new Movie();
        movie.id = element.id;
        movie.title = element.title;
        movie.rating = element.vote_average;
        movie.posterUrl = (`http://image.tmdb.org/t/p/w300${element.poster_path}`);
        this._movieList.push(movie);
      });
    }
  }));
}


fetchUpcomingMovies(): Observable<any> {
  this._movieList = [];
  return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((data: any) => {
    if (data != null) {
      data.results.forEach(element => {
        const movie: Movie = new Movie();
        movie.id = element.id;
        movie.title = element.title;
        movie.rating = element.vote_average;
        movie.posterUrl = (`http://image.tmdb.org/t/p/w300${element.poster_path}`);
        this._movieList.push(movie);
      });
    }
  }));
}

  public getMovieDetails(movieId: number): Observable<MovieDetails> {
  return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((response: any) => {
      if (response) {
        let movieDetails: MovieDetails = new MovieDetails();
        movieDetails.id = response.id;
        movieDetails.title = response.title;
        movieDetails.rating = response.vote_average;
        movieDetails.posterUrl = (`http://image.tmdb.org/t/p/w300${response.poster_path}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`);
        movieDetails.homepage = response.homepage;
        movieDetails.overview = response.overview;
        movieDetails.releaseDate = response.release_date;
        movieDetails.voteCount = response.vote_count;
        movieDetails.genre = response.genres.map(g => g.name);
        return movieDetails;
      }
    })
  );
}


  public fetchMovieGenres(): Observable<string[]> {
    return this.http.get("../assets/movies.json").pipe(
      map ((response: any[]) => {
        if (response) {
          let genres: string[] = [];
          genres = [...new Set( response.map(item => item.genres).join().split(",") )];
          return genres;
        }
      })
    );
  }

}
