import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppService } from "./app.service";
import { APIModule } from "./api/api.module";
import { PopularComponent } from "./popular/popular.component";
import { FormsModule } from "@angular/forms";
import { DetailMovieComponent } from "./detail-movie/detail-movie.component";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjViYzdkODY3MzZlZThhODFhNzlhODQ0ZjNhNWU2MSIsInN1YiI6IjVlNDU2YzQ1M2RkMTI2MDAxNDVjMTU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wjLnjAoToFEjBib38iBIlctnVtZTE-ENmrDFcfNFcsI";

@NgModule({
  declarations: [AppComponent, PopularComponent, DetailMovieComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APIModule.forRoot("https://api.themoviedb.org/3", ACCESS_TOKEN, "ru"),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
