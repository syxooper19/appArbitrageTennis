import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfosAppPage } from './infos-app';

@NgModule({
  declarations: [
    InfosAppPage,
  ],
  imports: [
    IonicPageModule.forChild(InfosAppPage),
  ],
})
export class InfosAppPageModule {}
