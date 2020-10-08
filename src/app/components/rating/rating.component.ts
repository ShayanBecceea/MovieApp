import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() movieId: number;
  rating: number;
  submitted: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  setUserRating(rating: number): void {
    this.rating = rating;
    console.log(this.rating);
  }

  submit(rating: number): void {
    if(rating < 0 || rating > 10 || rating == null) {
      this.rating = null;
    }else{
    this.movieService.postRating(this.movieId, this.rating)
    .subscribe ((response: any) => {
      this.submitted = true;
    })
  }
}

}
