import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from "ngx-pagination";
import {FullCalendarModule } from '@fullcalendar/angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CalenderComponent } from './calenderComponent/calender/calender.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { GetFilesComponent } from './get-files/get-files.component';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    MovieComponentComponent,
    GetFilesComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
