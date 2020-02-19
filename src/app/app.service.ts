import { Injectable } from '@angular/core';
import { MovieApiService } from './api/movie-api.service';
import { BehaviorSubject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ConfigApiService } from './api/config-api.service';

@Injectable()
export class AppService {
  private _movieGenreListSubject = new BehaviorSubject<{
    [id: number]: string;
  }>(null);
  readonly movieGenreList$ = this._movieGenreListSubject
    .asObservable()
    .pipe(filter(res => res !== null));
  private _imageBaseUrlSubject = new BehaviorSubject<string>(null);
  readonly imageBaseUrl$ = this._imageBaseUrlSubject
    .asObservable()
    .pipe(filter(res => res !== null));

  constructor(
    private _movieApiService: MovieApiService,
    private _configApiService: ConfigApiService
  ) {
    this._movieApiService.getMovieGenreList().subscribe(({ genres }) => {
      const genresMovie: { [id: number]: string } = genres.reduce(
        (acc: { [id: number]: string }, item: { id: number; name: string }) => {
          acc[item.id] = item.name;
          return acc;
        },
        {}
      );
      this._movieGenreListSubject.next(genresMovie);
    });
    this._configApiService
      .getConfiguration()
      .subscribe(({ images }) =>
        this._imageBaseUrlSubject.next(
          `${images.secure_base_url}${images.poster_sizes[3]}`
        )
      );
  }
}
