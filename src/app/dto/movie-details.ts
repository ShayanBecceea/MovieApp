export class MovieDetails {

    private _id: number;
    private _title: string;
    private _rating: number;
    private _genre: string[];
    private _posterUrl: string;
    private _overview: string;
    private _releaseDate: string;

    get id(): number {
        return this._id;
    }

    set id(_id: number) {
        this._id = _id;
    }

    get title(): string {
        return this._title;
    }

    set title(_title: string) {
        this._title = _title;
    }

    get rating(): number {
        return this._rating;
    }

    set rating(_rating: number) {
        this._rating = _rating;
    }

    get genre(): string[] {
        return this._genre;
    }

    get genreStr(): string {
        return this._genre.join(", ");
    }

    set genre(_genre: string[]) {
        this._genre = _genre;
    }

    get posterUrl(): string {
        return this._posterUrl;
    }

    set posterUrl(_posterUrl: string) {
        this._posterUrl = _posterUrl;
    }

    get overview(): string {
        return this._overview;
    }

    set overview(_overview: string) {
        this._overview = _overview;
    }

    get releaseDate(): string {
        return this._releaseDate;
    }

    set releaseDate(_releaseDate: string) {
        this._releaseDate = _releaseDate;
    }

}
