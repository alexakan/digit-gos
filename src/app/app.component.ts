import { Component, OnInit } from '@angular/core';
import { MovieApiService } from './api/movie-api.service';

import { switchMap, map } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent {
  constructor() {}
}
