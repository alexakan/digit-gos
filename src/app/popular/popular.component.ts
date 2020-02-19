import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../api/movie-api.service';
import { AppService } from '../app.service';
import { Subject, BehaviorSubject, combineLatest, interval } from 'rxjs';
import { map, debounceTime, mergeMap, distinctUntilChanged, tap, delay, throttle } from 'rxjs/operators';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  public genreList$ = this._appService.movieGenreList$;
  public movieList$ = new Subject<{[x: string]: any, results: any[]}>();
  public imageBaseUrl$ = this._appService.imageBaseUrl$;
  private _searchQuery$ = new BehaviorSubject<string>('');
  private _page$ = new Subject<number>();

  constructor(private _movieApiService: MovieApiService, private _appService: AppService) { }

  ngOnInit(): void {
    combineLatest([this._searchQuery$.pipe(debounceTime(500), distinctUntilChanged(), tap(() => this._page$.next(1))),
      this._page$])
      .pipe(
        mergeMap(([query, page]) => {
          if (query) {
            return this._movieApiService.searchMovie(query, page);
          }
          return this._movieApiService.getPopularList(page);
        })
      ).subscribe(movieList => this.movieList$.next(movieList));
  }

  public pageEvent(event): void {
    const pageIndex = event.pageIndex;
    this._page$.next(pageIndex + 1);
  }

  public changeInput({target: {value: query}}): void {
    this._searchQuery$.next(query);
  }
}
