import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config } from '../_config/config';
import 'rxjs/add/operator/map';
import { Article } from '../_models';

@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }

  get(): Observable<Article[]> {
    return this.http.get(Config.apiUrl + 'articles')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getArticleById(articleId: number): Observable<Article> {
    return this.http.get(Config.apiUrl + 'get_article?id=' + articleId)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}
