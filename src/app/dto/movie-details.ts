export class MovieDetails {

    private _id: number;
    private _title: string;
    private _rating: number;
    private _genre: string[];
    private _posterUrl: string;
    private _homepage: string;
    private _overview: string;
    private _productionCompanies: string[];
    private _productionCountries: string[];
    private _releaseDate: string;
    private _originalTitle: string;
    private _voteCount: number;

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

    get homepage(): string {
        return this._homepage;
    }

    set homepage(_homepage: string) {
        this._homepage = _homepage;
    }

    get overview(): string {
        return this._overview;
    }

    set overview(_overview: string) {
        this._overview = _overview;
    }

    get productionCompanies(): string[] {
        return this._productionCompanies;
    }

    set productionCompanies(_productionCompanies: string[]) {
        this._productionCompanies = _productionCompanies;
    }

    get productionCompaniesStr(): string {
        return this._productionCompanies.join(", ");
    }

    get productionCountries() {
        return this._productionCountries;
    }

    get productionCountriesStr(): string {
        return this._productionCountries.join(", ");
    }

    set productionCountries(_productionCountries: string[]) {
        this._productionCountries = _productionCountries;
    }

    get releaseDate(): string {
        return this._releaseDate;
    }

    set releaseDate(_releaseDate: string) {
        this._releaseDate = _releaseDate;
    }

    get originalTitle(): string {
        return this._originalTitle;
    }

    set originalTitle(_originalTitle: string) {
        this._originalTitle = _originalTitle;
    }

    get voteCount(): number {
        return this._voteCount;
    }

    set voteCount(_voteCount: number) {
        this._voteCount = _voteCount;
    }


}
