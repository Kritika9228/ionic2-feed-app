import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Connection } from './connection';

@NgModule({
  declarations: [
    Connection,
  ],
  
  exports: [
    Connection
  ]
})
export class ConnectionModule {}
