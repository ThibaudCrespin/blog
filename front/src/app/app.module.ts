import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdSnackBarModule
} from '@angular/material';

import { ThemeModule } from './theme/theme.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { CommentsComponent } from './home/comments/comments.component';
import { CreateComponent } from './home/create/create.component';

import {
  ArticlesService,
  CommentsService
} from './_services';

import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    CommentsComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ThemeModule,
    RouterModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdSnackBarModule,
    NgxSmartModalModule.forRoot(),
  ],
  providers: [
    ArticlesService,
    CommentsService,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
