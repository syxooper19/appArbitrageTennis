import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeMatchPage } from './liste-match';

@NgModule({
  declarations: [
    ListeMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeMatchPage),
  ],
})
export class ListeMatchPageModule {}
