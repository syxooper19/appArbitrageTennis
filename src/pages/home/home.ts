import { ListeMatchPage } from './../liste-match/liste-match';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NouveauMatchPage } from '../nouveau-match/nouveau-match';
import { InfosAppPage } from '../infos-app/infos-app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  

  openPageListeMatch(){
    this.navCtrl.push(ListeMatchPage);
  }

  openPageNouveauMatch(){
    this.navCtrl.push(NouveauMatchPage);
  }

  openPageInformations(){
    this.navCtrl.push(InfosAppPage);
  }
}
