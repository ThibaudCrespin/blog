import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import {
  HeaderComponent,
  ArticleComponent,
  CommentComponent
} from './components';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const THEME_COMPONENTS = [
  HeaderComponent,
  ArticleComponent,
  CommentComponent
];

const THEME_SERVICES = [

];

@NgModule({
  declarations: [
    THEME_COMPONENTS,
    ArticleComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
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
