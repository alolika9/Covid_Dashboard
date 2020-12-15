import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Country } from '../models/country';
import { Observable, throwError } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _http: HttpClient) { }
  //API to fetch data
  private host = "https://api.coronastatistics.live"

  //getting all countries from the API
  getAll(type): Observable<Country>{
    return this._http.get<Country>(`${this.host}/countries?sort=${type}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //call to get country data
  getCountry(name): Observable<Country>{
    return this._http.get<Country>(`${this.host}/countries/${name}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //Call to get time line data for chart display
  getTimeline(){
    return this._http.get(`${this.host}/timeline`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //Fetching timeline of data for a country
  getTimelineCountry(country){
    return this._http.get(`${this.host}/timeline/${country}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //Fetching global timeline of data
  getTimelineGlobal(){
    return this._http.get(`${this.host}/timeline/global`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert("Please check your internet connection!.");
    return throwError(errorMessage);
 }
}
