import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieApiService } from "../api/movie-api.service";
import { switchMap, delay } from "rxjs/operators";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { AppService } from "../app.service";
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: "app-detail-movie",
  templateUrl: "./detail-movie.component.html",
  styleUrls: ["./detail-movie.component.scss"]
})
export class DetailMovieComponent implements OnInit {
  private _page$ = new BehaviorSubject<number>(1);
  public movieEntity$ = this._activatedRoute.paramMap.pipe(
    switchMap(res =>
      this._movieApiService.getMovieDetail(Number(res.get("id")))
    )
  );
  public movieRecommends$ = combineLatest([this._activatedRoute.paramMap, this._page$]).pipe(
    switchMap(([paramMap, page]) =>
      this._movieApiService.getRecommendationByMovie(Number(paramMap.get("id")), page)
    )
  );
  public imageBaseUrl$ = this._appService.imageBaseUrl$;
  public genreList$ = this._appService.movieGenreList$;
  public indeterminate: ProgressSpinnerMode = "indeterminate";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieApiService: MovieApiService,
    private _appService: AppService
  ) {}

  ngOnInit(): void {}

  /**
   * Change page handler
   * @params page - current page
   */
  public changePageHandler(page: number): void {
    this._page$.next(page);
  }
}
