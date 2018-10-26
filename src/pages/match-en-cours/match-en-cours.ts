import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MatchEnCoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match-en-cours',
  templateUrl: 'match-en-cours.html',
})
export class MatchEnCoursPage {

  serviceJoueur: String; 

  scoreJeuJ1: String;
  scoreJeuJ2: String;

  scoreSet1J1: number;
  scoreSet1J2: number;

  scoreSet2J1: number;
  scoreSet2J2: number;

  scoreSet3J1: number;
  scoreSet3J2: number;

  joueur1: string;
  joueur2: string;

  setEnCours : number;

  nbSetJ1 : number;
  nbSetJ2 : number;

  tiebreak : boolean;
  matchFini : boolean;

  scoreTieBreakJ1 : number;
  scoreTieBreakJ2 : number;

  totalJeu: number;
  
  //--------------clickV2-----------
  private tabJeu : number[][];

  //--------------------------------
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.tabJeu = [];
    this.tabJeu[0]=[];

    this.serviceJoueur = "J1";

    this.joueur1 = navParams.get('data1');
    this.joueur2 = navParams.get('data2');

    this.scoreJeuJ1 = "0";
    this.scoreJeuJ2 = "0";

    this.scoreSet1J1 = 0;
    this.scoreSet1J2 = 0;

    this.scoreSet2J1 = 0;
    this.scoreSet2J2 = 0;

    this.scoreSet3J1 = 0;
    this.scoreSet3J2 = 0;

    this.setEnCours = 1;

    this.nbSetJ1 = 0;
    this.nbSetJ2 = 0;

    this.tiebreak = false;
    this.matchFini = false;

    this.scoreTieBreakJ1 = 0;
    this.scoreTieBreakJ2 = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchEnCoursPage');
  }


  goHome(){
    this.navCtrl.popToRoot();
  }



  clickJ1(){

    //Si le match n'est pas fini
    if (this.matchFini==false){

      //Tie-Break
      if (this.tiebreak==true){
        this.scoreTieBreakJ1++;

        this.scoreJeuJ1=this.scoreTieBreakJ1.toString();

        // Fin du tie-break car 2 points d'écart
        if (this.scoreTieBreakJ1>=6 && this.scoreTieBreakJ2+1<this.scoreTieBreakJ1){
          this.nbSetJ1++;
          this.tiebreak=false;
          this.scoreTieBreakJ1=0;
          this.scoreTieBreakJ2=0;
          this.scoreJeuJ1=this.scoreTieBreakJ1.toString();
          this.scoreJeuJ2=this.scoreTieBreakJ2.toString();

          //Ajout d'un set au compteur
          switch (this.setEnCours){
            case 1 :{
              this.scoreSet1J1++;
              this.setEnCours++;
              break;
            }

            case 2 :{
              this.scoreSet2J1++;
              this.setEnCours++;
              break;
            }

            case 3 :{
              this.scoreSet3J1++;
              this.matchFini=true;
              break;
            }

          }

        }
      }

      //Jeu normal
      else {

      
        switch(this.scoreJeuJ1) { 
        
        //Score = 30
        case "30": { 
          this.scoreJeuJ1="40";
          break;
        } 

        //Score = 15
        case "15": { 
          this.scoreJeuJ1="30";
          break;
        } 

        //Score = 0
        case "0": { 
          this.scoreJeuJ1="15";
          break;
        }   
        
        //Score = 40 ou AV 
        default: { 

          //Avantage J1
          if ((this.scoreJeuJ1=="40") && (this.scoreJeuJ2=="40")) {
            this.scoreJeuJ1="AV";
            break;
          }


          //Egalité
          if ((this.scoreJeuJ1=="40") && (this.scoreJeuJ2=="AV")) {
            this.scoreJeuJ2="40";
            this.scoreJeuJ1="40";
            break;
          }
          
          
          //Jeu J1
          if (this.scoreJeuJ2!="40" || this.scoreJeuJ1=="AV"){
            
            switch (this.setEnCours){

              //On est dans le premier set
              case 1:{
                this.scoreSet1J1++

                //Fin du set si J1=6 et J2<=4
                if (this.scoreSet1J1==6 && this.scoreSet1J2<5){
                  this.setEnCours++;
                  this.nbSetJ1++;
                }

                //Fin du set si J1=7 et J2<=5
                if (this.scoreSet1J1==7 && this.scoreSet1J2<6){
                  this.setEnCours++;
                  this.nbSetJ1++;
                }

                //Si 6-6 -> tie-break
                if (this.scoreSet1J1==6 && this.scoreSet1J2==6){
                  this.tiebreak = true;
                }


                break;
              }



              //On est dans le deuxième set
              case 2:{
                this.scoreSet2J1++;


                //Fin du set si J1=6 et J2<=4
                if ((this.scoreSet2J1==6) && (this.scoreSet2J2<5)){
                  if ((this.scoreSet2J1==6) && (this.nbSetJ1!=2)){
                    //changement de set
                    this.setEnCours++;
                    this.nbSetJ1++;
                  }
                  if (this.nbSetJ1==2){
                    //fin du match
                    console.log("FIN DU MATCH : Victoire J1");
                    this.matchFini = true;
                    
                  }
                }


                //Fin du set si J1=7 et J2<=5
                if (this.scoreSet2J1==7 && this.scoreSet2J2<6){
                  if ((this.scoreSet2J1==7) && (this.nbSetJ1!=2)){
                    //changement de set
                    this.setEnCours++;
                    this.nbSetJ1++;
                  }
                  if (this.nbSetJ1==2){
                    //fin du match
                    console.log("FIN DU MATCH : Victoire J1");
                    this.matchFini = true;
                  }
                }


                //Si 6-6 -> tie-break
                if (this.scoreSet2J1==6 && this.scoreSet2J2==6){
                  this.tiebreak = true;
                }


                
                break;
              }




              //On est dans le troisième set
              case 3:{
                this.scoreSet3J1++;
                
                //Fin du set si J1=6 et J2<=4
                if (this.scoreSet3J1==6 && this.scoreSet3J2<5){
                  this.matchFini = true;
                  console.log("FIN DU MATCH : Victoire J1");
                  this.nbSetJ1++;
                }

                //Fin du set si J1=7 et J2<=5
                if (this.scoreSet3J1==7 && this.scoreSet3J2<6){
                  this.matchFini = true;
                  console.log("FIN DU MATCH : Victoire J1");
                  this.nbSetJ1++;
                }

                //Si 6-6 -> tie-break
                if (this.scoreSet3J1==6 && this.scoreSet3J2==6){
                  this.tiebreak=true;
                }


                break;
              }

            }

            //Nouveau jeu, donc initialisation des scores
            this.scoreJeuJ1 = "0";
            this.scoreJeuJ2 = "0";
          }

          break;

        }  
        }
      }
    }
    this.totalJeu = this.scoreSet1J1+this.scoreSet1J2+this.scoreSet2J1+this.scoreSet2J2+this.scoreSet3J1+this.scoreSet3J2;
    
    if (this.totalJeu%2==0){
      this.serviceJoueur="J1";
    }else{
      this.serviceJoueur="J2";
    }
  }


  clickJ2(){

    
    
    //Si le match n'est pas fini
    if (this.matchFini==false){

      //Tie-Break
      if (this.tiebreak==true){
        this.scoreTieBreakJ2++;
        
        this.scoreJeuJ2=this.scoreTieBreakJ2.toString();

        // Fin du tie-break car 2 points d'écart
        if (this.scoreTieBreakJ2>=6 && this.scoreTieBreakJ1+1<this.scoreTieBreakJ2){
          this.nbSetJ2++;
          this.tiebreak=false;
          this.scoreTieBreakJ1=0;
          this.scoreTieBreakJ2=0;
          this.scoreJeuJ1=this.scoreTieBreakJ1.toString();
          this.scoreJeuJ2=this.scoreTieBreakJ2.toString();

          //Ajout d'un set au compteur
          switch (this.setEnCours){
            case 1 :{
              this.scoreSet1J2++;
              this.setEnCours++;
              break;
            }

            case 2 :{
              this.scoreSet2J2++;
              this.setEnCours++;
              break;
            }

            case 3 :{
              this.scoreSet3J2++;
              this.matchFini = true;
              break;
            }
          }
        }
      }

      //Jeu normal
      else {

      
        switch(this.scoreJeuJ2) { 
        
        //Score = 30
        case "30": { 
          this.scoreJeuJ2="40";
          break;
        } 

        //Score = 15
        case "15": { 
          this.scoreJeuJ2="30";
          break;
        } 

        //Score = 0
        case "0": { 
          this.scoreJeuJ2="15";
          break;
        }   
        
        //Score = 40 ou AV 
        default: { 

          //Avantage J2
          if ((this.scoreJeuJ2=="40") && (this.scoreJeuJ1=="40")) {
            this.scoreJeuJ2="AV";
            break;
          }


          //Egalité
          if ((this.scoreJeuJ2=="40") && (this.scoreJeuJ1=="AV")) {
            this.scoreJeuJ2="40";
            this.scoreJeuJ1="40";
            break;
          }
          
          
          //Jeu J2
          if (this.scoreJeuJ1!="40" || this.scoreJeuJ2=="AV"){
            
            switch (this.setEnCours){

              //On est dans le premier set
              case 1:{
                this.scoreSet1J2++

                //Fin du set si J2=6 et J1<=4
                if (this.scoreSet1J2==6 && this.scoreSet1J1<5){
                  this.setEnCours++;
                  this.nbSetJ2++;
                }

                //Fin du set si J2=7 et J1<=5
                if (this.scoreSet1J2==7 && this.scoreSet1J1<6){
                  this.setEnCours++;
                  this.nbSetJ2++;
                }

                //Si 6-6 -> tie-break
                if (this.scoreSet1J2==6 && this.scoreSet1J1==6){
                  this.tiebreak = true;
                }


                break;
              }



              //On est dans le deuxième set
              case 2:{
                this.scoreSet2J2++;


                //Fin du set si J2=6 et J1<=4
                if (this.scoreSet2J2==6 && this.scoreSet2J1<5){
                  if ((this.scoreSet2J2==6) && (this.nbSetJ2!=2)){
                    //changement de set
                    this.setEnCours++;
                    this.nbSetJ2++;
                  }
                  if (this.nbSetJ2==2){
                    //fin du match
                    console.log("FIN DU MATCH : Victoire J2");
                    this.matchFini = true;
                  }
                }


                //Fin du set si J2=7 et J1<=5
                if (this.scoreSet2J2==7 && this.scoreSet2J1<6){
                  if ((this.scoreSet2J2==7) && (this.nbSetJ2!=2)){
                    //changement de set
                    this.setEnCours++;
                    this.nbSetJ2++;
                  }
                  if (this.nbSetJ2==2){
                    //fin du match
                    console.log("FIN DU MATCH : Victoire J2");
                    this.matchFini = true;
                  }
                }


                //Si 6-6 -> tie-break
                if (this.scoreSet2J2==6 && this.scoreSet2J1==6){
                  this.tiebreak = true;
                }


                
                break;
              }




              //On est dans le troisième set
              case 3:{
                this.scoreSet3J2++
                
                //Fin du set si J2=6 et J1<=4
                if (this.scoreSet3J2==6 && this.scoreSet3J1<5){
                  this.matchFini = true;
                  console.log("FIN DU MATCH : Victoire J1");
                  this.nbSetJ2++;
                }

                //Fin du set si J2=7 et J1<=5
                if (this.scoreSet3J2==7 && this.scoreSet3J1<6){
                  this.matchFini = true;
                  console.log("FIN DU MATCH : Victoire J1");
                  this.nbSetJ2++;
                }

                //Si 6-6 -> tie-break
                if (this.scoreSet3J2==6 && this.scoreSet3J1==6){
                  this.tiebreak=true;
                }


                break;
              }

            }

            //Nouveau jeu, donc initialisation des scores
            this.scoreJeuJ1 = "0";
            this.scoreJeuJ2 = "0";
          }

          break;

        }  
        }
      }
    }
  
    this.totalJeu = this.scoreSet1J1+this.scoreSet1J2+this.scoreSet2J1+this.scoreSet2J2+this.scoreSet3J1+this.scoreSet3J2;
    
    if (this.totalJeu%2==0){
      this.serviceJoueur="J1";
    }else{
      this.serviceJoueur="J2";
    }
  }



  /*
  clickJ2.2(){


    switch(this.scoreJeuJ2) { 
      
      //Score = AV
      case "AV":{
        this.scoreJeuJ1=="40"

        switch(this.setEnCours){
          case 1:{
           this.scoreSet1J2++
           if (this.scoreSet1J2==6){
             //changement de set
             this.setEnCours++
           }
           break;
          }
  
          case 2:{
           this.scoreSet2J2++
           if (this.scoreSet2J2==6){
             //changement de set
             this.setEnCours++
           }
           break;
  
          }
  
          case 3:{
           this.scoreSet3J2++
           if (this.scoreSet3J2==6){
             //changement de set
             this.setEnCours++
           }
           break;
  
          }
        }

        this.scoreJeuJ1 = "0";
        this.scoreJeuJ2 = "0";
        break;
      }

      //Score = 40
      case "40": { 
        
        //Si pas 'Avantage', vérification des sets
        if ((this.scoreJeuJ1!="40") && (this.scoreJeuJ1!="AV")){

          
         switch(this.setEnCours){
           case 1:{
            this.scoreSet1J2++
            if (this.scoreSet1J2==6){
              //changement de set
              this.setEnCours++
            }
            break;
           }

           case 2:{
            this.scoreSet2J2++
            if (this.scoreSet2J2==6){
              //changement de set
              this.setEnCours++
            }
            break;

           }

           case 3:{
            this.scoreSet3J2++
            if (this.scoreSet3J2==6){
              //changement de set
              this.setEnCours++
            }
            break;

           }
         }

          this.scoreJeuJ1 = "0";
          this.scoreJeuJ2 = "0";

          break;
        }

        //Sinon, avantage (deux points d'écarts)
        else{
          if (this.scoreJeuJ1=="AV"){
            this.scoreJeuJ1="40"
          }else{
            this.scoreJeuJ2 = "AV";
          }          
          break;
        }

      } 

      //Score = 30
      case "30": { 
        this.scoreJeuJ2="40";
        break;
      } 

      //Score = 15
      case "15": { 
        this.scoreJeuJ2="30";
        break;
      } 

      //Score = 0
      case "0": { 
        this.scoreJeuJ2="15";
        break;
      }    
      
    }
  }
  */





}
