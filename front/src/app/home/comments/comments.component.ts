import { Component, OnInit } from '@angular/core';
import { Article, Comment } from '../../_models';
import { ArticlesService, CommentsService } from '../../_services';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  article: Article;
  comments: Comment[] = [];
  form: FormGroup;
  model: any = {};
  articleId: number = 0;

  constructor(public route: ActivatedRoute, private fb: FormBuilder, private snackbar: MdSnackBar,
              private articlesService: ArticlesService, private commentsService: CommentsService,
              private ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    const me = this;

    me.articleId = me.route.snapshot.params.article;

    me.buildForm();

    me.articlesService.getArticleById(me.articleId)
      .subscribe(
        response => {
          me.article = response;
          me.getComments();
        },
        errors => {
          console.log(errors);
        }
      );
  }

  getComments(){
    const me = this;

    me.commentsService.get(me.articleId)
      .subscribe(
        response => {
          me.comments = response;
        },
        errors => {
          console.log(errors);
        }
      );
  }

  deleteComment(id: number){
    const me = this;

    me.commentsService.delete(id)
      .subscribe(
        response => {
          me.getComments();
          me.snackbar.open(response['content'], 'Fermer', {
            duration: 3000
          });
          me.form.reset();
        },
        errors => {
          console.log(errors);
          me.snackbar.open(errors.content, 'Fermer', {
            duration: 3000
          });
        }
      );
  }

  saveComment(){
    const me = this;

    me.commentsService.create(me.model)
      .subscribe(
        response => {
          me.getComments();
          me.ngxSmartModalService.getModal('comment-modal').close();
          me.snackbar.open(response['content'], 'Fermer', {
            duration: 3000
          });
          me.form.reset();
        },
        errors => {
          console.log(errors);
          me.snackbar.open(errors.content, 'Fermer', {
            duration: 3000
          });
        }
      );
  }

  buildForm() {
    const me = this;

    me.form = me.fb.group({
      author: ['', Validators.required],
      content: ['', Validators.required],
      article_id : [me.articleId, Validators.required]
    });
  }

  onSubmit({value, valid}: {value: Object, valid: boolean}) {
    const me = this;

    if (valid) {
      me.model = value;
      me.saveComment();
    }
  }

}
