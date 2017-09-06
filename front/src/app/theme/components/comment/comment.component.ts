import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../../_models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() onDelete: EventEmitter<number>;

  constructor() {
    const me = this;
    me.onDelete = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteComment() {
    const me = this;
    me.onDelete.emit(me.comment.id);
  }

}
