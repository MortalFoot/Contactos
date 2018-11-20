import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  contactos=[];
  c="";
  Nombre= '';
  Numero= '';
  imagen ="";
  correo="";
  Twitter= "";
  Facebook ='';
  Instagram ='';
 


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
    this.contactos= this.navParams.get("contactos");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  clickGuardar()
  {
    if(this.Nombre.length <= 0)
    {
      console.log("La wea esta vacía")
      const alert = this.alertCtrl.create({
        title: "Oops!",
        subTitle: "El contacto debe tener nombre y telefono.",
        buttons: ['Ok']
      });
      alert.present();
  }
  else
  {
    this.contactos.push({id: 0, imagen: this.imagen, Nombre: this.Nombre, correo: this.correo, Numero: this.Numero, Facebook: this.Facebook, Twitter: this.Twitter, Instagram: this.Instagram});
  }
}

   
    
  }



