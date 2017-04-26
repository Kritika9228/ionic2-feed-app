import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostPage } from './post';

@NgModule({
  declarations: [
    PostPage,
  ],
 
  exports: [
    PostPage
  ]
})
export class Post {}
