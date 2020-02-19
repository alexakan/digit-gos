import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input()
  movieList$: any;
  @Output()
  changePage = new EventEmitter<number>();

  public genreList$ = this._appService.movieGenreList$;
  public imageBaseUrl$ = this._appService.imageBaseUrl$;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
  }

  public pageEvent(event): void {
    const pageIndex = event.pageIndex;
    this.changePage.emit(pageIndex + 1);
    // this._page$.next(pageIndex + 1);
  }

}
