import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() categoryEvent = new EventEmitter<string>();
  @Input() movieGenres: string[] = [];
  @Input() nameSelected: string;

  constructor() {}

  ngOnInit(): void {
  }

  onSelected(name: string) {
    this.nameSelected = name;
    this.send(name);
  }

  send(value: string) {
    this.categoryEvent.emit(value);
  }

}
