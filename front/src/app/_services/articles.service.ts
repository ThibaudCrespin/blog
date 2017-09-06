import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
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

  create(article: any): Observable<Object> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.post(Config.apiUrl + 'add_article', article, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  delete(id:number): Observable<Comment[]> {
    return this.http.get(Config.apiUrl + 'delete_article?id=' + id)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getArticleById(articleId: number): Observable<Article> {
    return this.http.get(Config.apiUrl + 'get_article?id=' + articleId)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}
