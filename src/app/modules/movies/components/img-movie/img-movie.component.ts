import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-img-movie',
  templateUrl: './img-movie.component.html',
  styleUrls: ['./img-movie.component.css']
})
export class ImgMovieComponent implements OnInit{

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

}