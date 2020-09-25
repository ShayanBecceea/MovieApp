import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() text: string;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void {
    // this.selected = false;
  }

}
