import { NgModule, ModuleWithProviders } from '@angular/core';
import { APIService } from './api.service';
import { MovieApiService } from './movie-api.service';
import { ConfigApiService } from './config-api.service';

@NgModule()
export class APIModule {
  /**
   * Configuration api
   */
  static forRoot(apiUrl, accessToken, language): ModuleWithProviders {
    return {
      ngModule: APIModule,
      providers: [
        APIService,
        MovieApiService,
        ConfigApiService,
        { provide: 'API_URL', useValue: apiUrl },
        { provide: 'ACCESS_TOKEN', useValue: accessToken },
        { provide: 'LANGUAGE', useValue: language },
      ],
    };
  }
}
