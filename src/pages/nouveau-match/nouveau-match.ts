import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchEnCoursPage } from '../match-en-cours/match-en-cours';

/**
 * Generated class for the NouveauMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nouveau-match',
  templateUrl: 'nouveau-match.html',
})
export class NouveauMatchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NouveauMatchPage');
  }

  openPageMatchEnCours(joueur1, joueur2){
    //joueur1 = joueur1;
    this.navCtrl.push(MatchEnCoursPage, {data1: joueur1, data2: joueur2});
  }
}
