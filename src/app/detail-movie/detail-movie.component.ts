import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../api/movie-api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap
      .pipe(switchMap(res => this._movieApiService.getMovieDetail(Number(res.get('id')))))
      .subscribe(movieDetail => {
        console.log(movieDetail);
      });
  }

}
