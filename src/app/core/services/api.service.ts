import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlMoviesApi = "https://ghibliapi.dev/films"

  constructor(private http: HttpClient ) { }

  getAllMovies(): Observable<any[]>{
    return this.http.get<any[]>(this.urlMoviesApi);
  }




}