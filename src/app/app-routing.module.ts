import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calenderComponent/calender/calender.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { GetFilesComponent } from './get-files/get-files.component';

const routes: Routes = [
  {
    path:"",
    component:MovieComponentComponent
  },
  {
    path:"api/shows",
    component:MovieComponentComponent
  },
  {
    path:'shows',
    component:CalenderComponent
  },
  {
    path:'files',
    component:GetFilesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
