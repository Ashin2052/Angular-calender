import { Component, OnInit,Input } from '@angular/core';
import { MovieListService } from '../amnil/movie-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-files',
  templateUrl: './get-files.component.html',
  styleUrls: ['./get-files.component.css']
})
export class GetFilesComponent implements OnInit {
  everyFiles=[];
  searchKeyword=""
  allFileList=[];
  constructor(private MovieListService:MovieListService,private router: Router) { }

  ngOnInit() {
  }
  
  getMovie(filepath)
  {
  console.log(filepath,"filepatg")
  this.searchKeyword=filepath;
  this.MovieListService.allFileList(filepath).subscribe((response:any)=>
  {
    // this.allFileList=JSON.stringify(response);
    this.allFileList = response;
    console.log(typeof  response);

    console.log(typeof  this.allFileList);
    console.log(this.allFileList,"allFileList")

  })

  }
}
