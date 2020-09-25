/* setters and getters for movie */

export class Movie {

    private _id: number;
    private _title: string;
    private _rating: number;
    private _genre: string[];
    private _posterUrl: string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
      return this._title;
    }

    set title(value: string) {
      this._title = value;
    }

     get rating(): number {
        return this._rating;
    }

     set rating(rating: number){
        this._rating = rating;
    }

     get genre(): string[] {
        return this._genre;
    }

     set genre(genre: string[]) {
        this._genre = genre;
    }

     get posterUrl(): string {
        return this._posterUrl;
    }

     set posterUrl(posterUrl: string){
        this._posterUrl = posterUrl;
    }

    get genreTotal(): string {
      if(this._genre){
      return this._genre.join();
    }
  }
}
