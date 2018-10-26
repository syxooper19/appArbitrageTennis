import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NouveauMatchPage } from './nouveau-match';

@NgModule({
  declarations: [
    NouveauMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(NouveauMatchPage),
  ],
})
export class NouveauMatchPageModule {}
