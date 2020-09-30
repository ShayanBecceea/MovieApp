import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchMovieTitle = new EventEmitter<string>();
  @Output() selectedFromApi = new EventEmitter<string>();
  dropdown:boolean = false;
  @Input('trendItemSelected') trendItemSelected: string;

  @Input('showSearch') showSearch: boolean = true;

  constructor(private router:Router, public translate: TranslateService ) {}

  switchLanguage(language:string) {
    this.translate.setDefaultLang(language);
  }

  ngOnInit(): void {
  }

  DropdownToggle(): void {
    this.dropdown = !this.dropdown;
  }

  searchMovie(movieTitle: string): void {
    this.searchMovieTitle.emit(movieTitle);
  }

  showTrending(value: string): void {
    this.trendItemSelected = value;
    this.selectedFromApi.emit(value);
  }

  Logout(){
    this.router.navigate(["/"]);
    localStorage.clear();
  }

}
