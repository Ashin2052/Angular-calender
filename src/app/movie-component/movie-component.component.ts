import { Component, OnInit } from '@angular/core';
import { MovieListService} from "src/app/amnil/movie-list.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {

  constructor(private MovieListService:MovieListService,private router: Router) { }

  ngOnInit() {
    this.getMovieList()

  }
  allFileList=[];
  searchKeyword="";
  movieList=[];
  getMovieList() {
   
   this.MovieListService.movieList().subscribe((response:any)=>
   {
 this.movieList=response;
//  this.allFileList=response
 console.log("response",this.movieList)
   })
  }
 

}
