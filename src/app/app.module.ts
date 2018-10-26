import { MatchEnCoursPage } from './../pages/match-en-cours/match-en-cours';
import { InfosAppPage } from './../pages/infos-app/infos-app';
import { ListeMatchPage } from './../pages/liste-match/liste-match';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NouveauMatchPage } from '../pages/nouveau-match/nouveau-match';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListeMatchPage,
    InfosAppPage,
    NouveauMatchPage,
    MatchEnCoursPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListeMatchPage,
    InfosAppPage,
    NouveauMatchPage,
    MatchEnCoursPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
