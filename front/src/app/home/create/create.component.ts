import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  model: any = {};

  constructor(private articlesService: ArticlesService, private snackbar: MdSnackBar, private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    const me = this;

    me.buildForm();
  }

  saveArticle(){
    const me = this;

    me.articlesService.create(me.model)
      .subscribe(
        response => {
          me.router.navigate(['/home']);
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
      title: ['', Validators.required],
      header: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
      picture: ['', Validators.required],
    });
  }

  onSubmit({value, valid}: {value: Object, valid: boolean}) {
    const me = this;

    if (valid) {
      me.model = value;
      me.saveArticle();
    }
  }

}
