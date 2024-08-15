import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit{

  moviesList: Array<any> = [];

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.getMoviesList();
  }

  async getMoviesList(){
    this.moviesService.getListMoviesApi()
      .then(data => this.moviesList = data)
      .catch(error => console.error('Error to get movies from Studio Ghinli API ' + error));
  }

  viewInfo(idMovie: string){
    console.log("el ID de la pelicula es --> " + idMovie);
    
  }

}