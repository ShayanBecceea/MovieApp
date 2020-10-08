import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Movie} from '../../dto/movie';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  @Input() title: string;
  @Input() moviesDisplayed: Movie[] = [];
  @Output() selectedFromApi = new EventEmitter<string>();

  firstMovieList: Movie[] = [];
  ratingBy: string = "all";

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.firstMovieList = changes.moviesDisplayed.currentValue;

    if (this.ratingBy != "all") {
      this.sortMovies(this.ratingBy);
    }
  }

  sortMovies(rating: string): void {
    this.ratingBy = rating;

    if (rating === "all") {
      this.moviesDisplayed = this.firstMovieList;

    } else if (rating === "5 rating") {
      this.moviesDisplayed = this.firstMovieList.filter(m => m.rating <= 5);

    } else if (rating === "5+ rating") {
      this.moviesDisplayed = this.firstMovieList.filter(m => m.rating > 5);
    }
  }

  getMoviesContent(value: string): void {
    this.selectedFromApi.emit(value);
  }

}
