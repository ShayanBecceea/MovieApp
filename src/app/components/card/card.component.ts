import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movieId: number;
  @Input() movieTitle: string;
  @Input() movieRating: number;
  @Input() movieGenre: string;
  @Input() moviePicUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  displayrating: boolean = false;

  getGallery(value) {
    this.displayrating = !this.displayrating;
  }
}
