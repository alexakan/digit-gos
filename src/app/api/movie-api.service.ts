import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APIService } from './api.service';

@Injectable()
export class MovieApiService {
  constructor(private _apiService: APIService) {}

  public getPopularList(page = 1): Observable<any> {
    return this._apiService.get('movie/popular', {page});
  }

  public getMovieGenreList(): Observable<any> {
    return this._apiService.get('genre/movie/list');
  }

  public searchMovie(query: string, page = 1): Observable<any> {
    return this._apiService.get('search/movie', {query, page});
  }

  public getMovieDetail(movieId: number): Observable<any> {
    return this._apiService.get(`movie/${movieId}`);
  }

  public getRecommendationByMovie(movieId: number): Observable<any> {
    return this._apiService.get(`movie/${movieId}/recommendations`);
  }
}
