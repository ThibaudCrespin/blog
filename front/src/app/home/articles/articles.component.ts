import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../_services';
import { Article } from '../../_models';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    const me = this;

    me.articlesService.get()
      .subscribe(
        response => {
          me.articles = response;
        },
        errors => {
          console.log(errors);
        }
      );
  }

}
