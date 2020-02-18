import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APIService } from './api.service';

@Injectable()
export class ConfigApiService {
  constructor(private _apiService: APIService) {}

  public getConfiguration(): Observable<any> {
    return this._apiService.get('configuration');
  }
}
