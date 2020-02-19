import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from './api.service';
import { PopularMovie } from './api.interface';

@Injectable()
export class MovieApiService {
  constructor(private _apiService: APIService) {}

  public getPopularList(page = 1): Observable<PopularMovie> {
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

  public getRecommendationByMovie(movieId: number, page: number = 1): Observable<any> {
    return this._apiService.get(`movie/${movieId}/recommendations`, {page});
  }
}
