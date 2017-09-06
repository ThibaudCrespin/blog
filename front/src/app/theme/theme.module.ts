import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MdToolbarModule, MdCardModule, MdButtonModule, MdIconModule } from '@angular/material';

import {
  HeaderComponent,
  ArticleComponent,
  CommentComponent
} from './components';

const THEME_COMPONENTS = [
  HeaderComponent,
  ArticleComponent,
  CommentComponent
];

const THEME_SERVICES = [

];

@NgModule({
  declarations: [
    THEME_COMPONENTS
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    THEME_COMPONENTS
  ]
})

export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        THEME_SERVICES
      ]
    };
  }
}
