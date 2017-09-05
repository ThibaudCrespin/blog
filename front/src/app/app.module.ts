import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ThemeModule } from './theme/theme.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { CommentsComponent } from './home/comments/comments.component';

import {
  ArticlesService,
  CommentsService
} from './_services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ThemeModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    ArticlesService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
