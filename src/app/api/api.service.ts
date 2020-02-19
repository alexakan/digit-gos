import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
  private _apiUrl = 'https://api.themoviedb.org/3';
  private _accessToken = '';
  private _language = '';
  constructor(
    @Inject('API_URL')
    apiUrl: string,
    @Inject('ACCESS_TOKEN')
    accessToken: string,
    @Inject('LANGUAGE')
    language: string,
    private _httpClient: HttpClient,
  ) {
    if (apiUrl) {
      this._apiUrl = apiUrl;
    }
    if (accessToken) {
      this._accessToken = accessToken;
    }
    if (language) {
      this._language = language;
    }
  }

  /**
   * GET request
   * @param url - hadler url
   * @param params - request params
   */
  public get(url: string, params: any = {}): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/${url}`, {
        headers: {
          Authorization: `Bearer ${this._accessToken}`
        },
        params: {
          language: this._language,
          ...params,
        },
      });
  }
}
