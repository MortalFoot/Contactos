import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  Nombre= '';
  imagen= '';
  correo= '';
  Numero= '';
  Facebook= '';
  Twitter= '';
  Instagram= '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    
    this.Nombre = this.navParams.get('Nombre');
   
    this.imagen = this.navParams.get('imagen');

    
    this.correo = this.navParams.get('correo');

    
    this.Numero = this.navParams.get('Numero');

    
    this.Facebook = this.navParams.get('Facebook');

    
    this.Twitter = this.navParams.get('Twitter');

    
    this.Instagram = this.navParams.get('Instagram');
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

}
