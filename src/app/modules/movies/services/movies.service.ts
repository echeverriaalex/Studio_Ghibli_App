import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private apiService: ApiService) { }


  getListMoviesApi(): Promise <any[]>{
    return new Promise<any[]>((resolve, reject)=>{
      this.apiService.getAllMovies().subscribe({
        next: data => resolve(data),
        error: error => reject(error)
      })
    });
  }


}