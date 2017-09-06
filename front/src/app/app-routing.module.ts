import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { CommentsComponent } from './home/comments/comments.component';
import { CreateComponent} from './home/create/create.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'articles', component: ArticlesComponent},
      {path: 'comments/:article', component: CommentsComponent},
      {path: 'create', component: CreateComponent},
      {path: '**', redirectTo: 'articles', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
