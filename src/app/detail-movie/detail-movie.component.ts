import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../api/movie-api.service';
import { switchMap, delay } from 'rxjs/operators';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AppService } from '../app.service';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  public movieEntity$ = this._activatedRoute.paramMap.pipe(
    switchMap(res =>
      this._movieApiService.getMovieDetail(Number(res.get('id')))
    ), delay(1000)
  );
  public movieRecommends$ = this._activatedRoute.paramMap.pipe(
    switchMap(res =>
      this._movieApiService.getRecommendationByMovie(Number(res.get('id')))
    )
  );
  public imageBaseUrl$ = this._appService.imageBaseUrl$;
  public indeterminate: ProgressSpinnerMode = 'indeterminate';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieApiService: MovieApiService,
    private _appService: AppService
  ) {}

  ngOnInit(): void {
  }
}
