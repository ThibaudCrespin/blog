import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config } from '../_config/config';
import 'rxjs/add/operator/map';
import { Comment } from '../_models';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  get(articleId: number): Observable<Comment[]> {
    return this.http.get(Config.apiUrl + 'comments?article=' + articleId)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  create(comment: any): Observable<Object> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.post(Config.apiUrl + 'add_comment', comment, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  delete(id:number): Observable<Comment[]> {
    return this.http.get(Config.apiUrl + 'delete_comment?id=' + id)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}
