import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() movieGenres: string[] = [];
  @Input() nameSelected: string;

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  onSelected(name: string) {
    this.nameSelected = name;

    this.router.navigate(['/movie'],
    {queryParams: {genre:name}});
  }

}
