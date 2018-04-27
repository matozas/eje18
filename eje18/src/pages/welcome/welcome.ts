import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  public nom;
  public ema;
  public tel;
  public com;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nom=this.navParams.get('nombre');
    this.ema=this.navParams.get('email')
    this.tel=this.navParams.get('telefono');
    this.com=this.navParams.get('comentario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
