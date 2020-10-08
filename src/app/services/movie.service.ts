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
  private gallery: MovieDetails[];

  url: string= "https://api.themoviedb.org/3/movie/";

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.http.get("../assets/movies.json");
  }

  get movieList(): Movie[] {
    return this._movieList;
  }

  get movieGallery(): MovieDetails[] {
    return this.gallery;
  }

  //upcoming movies
  fetchPopularMovies(): Observable<any> {
    this._movieList = [];
    return this.http.get(this.url + `popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
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

  //popular movies
  fetchUpcomingMovies(): Observable<any> {
    this._movieList = [];
    return this.http.get(this.url + `upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
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
  return this.http.get(this.url + `${movieId}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((response: any) => {
      if (response) {
        let movieDetails: MovieDetails = new MovieDetails();
        movieDetails.id = response.id;
        movieDetails.title = response.title;
        movieDetails.rating = response.vote_average;
        movieDetails.posterUrl = (`http://image.tmdb.org/t/p/w300${response.poster_path}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`);
        movieDetails.overview = response.overview;
        movieDetails.releaseDate = response.release_date;
        movieDetails.genre = response.genres.map(g => g.name);
        return movieDetails;
      }
    }));
  }


  public fetchMovieGenres(): Observable<string[]> {
    return this.http.get("../assets/movies.json").pipe(
      map ((response: any[]) => {
        if (response) {
          let genres: string[] = [];
          genres = [...new Set( response.map(item => item.genres).join().split(",") )];
          return genres;
        }
      }));
    }

  //post rating for movie
  public postRating(movieId:number, rating: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`).pipe(
      map((response: any) => {
          console.log(response);
          const httpOptions = {
            params: {
              api_key: "fed69657ba4cc6e1078d2a6a95f51c8c",
              guest_session_id: response.guest_session_id
            },
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          };
          const body = {
            value: rating
          };
          return this.http.post(this.url + `${movieId}/rating`, body, httpOptions);
      }));
    }


  //movie gallery
  public getMovieGallery(movieId: number): Observable<Object[]> {
    return this.http.get(this.url + `${movieId}` + "/images?api_key=fed69657ba4cc6e1078d2a6a95f51c8c")
    .pipe(map((response: any) => {
        if (response != null) {
          let posters: Object[] = [];
          response.backdrops.forEach(element => {
          posters.push ({
            image: `http://image.tmdb.org/t/p/original/${element.file_path}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`,
            thumbImage: `http://image.tmdb.org/t/p/original/${element.file_path}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`,
          });
        });
          return posters;
        }
      }));
    }
}
