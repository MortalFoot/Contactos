import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ContactosPage } from '../contactos/contactos';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactos = ContactosPage;

  agregar = AgregarPage;

  Con = [

    {id:0,
     
      Nombre: "Ernesto Palacios",
      Numero:     "55 3500 2916",
      imagen:"../assets/imgs/images.jfif",
      Facebook: "Ernesto Palacios",
      Twitter: "Epalacios01",
      Instagram: "ernesto_p_cacho",
      correo:"epalacioscacho@gmail.com"


     },

     {id:1,
     
      Nombre: "Maria de Lourdes ",
      Numero:     "55 3550 1549",
      imagen:"../assets/imgs/M.jpg",
      Facebook:"",
      Twitter: "",
      Instagram: "",
      correo:""

    },

    {id:2,
     
      Nombre: "Ernesto Palacios Saavedra",
      Numero:     "55 1560 3050",
      imagen:"../assets/imgs/P.jfif",
      Facebook: "Ernesto Palacios",
      Twitter: "",
      Instagram: "",
      correo:"epalacios@tevamexico.com"
      

     },

     {id:3,
     
      Nombre: "Bruno Palacios",
      Numero:     "(33) 2714 5020 ",
      imagen:"../assets/imgs/B.jfif",
      Facebook:"",
      Twitter: "",
      Instagram: "",
      correo:"morsacom1@gmail.com"

    }

        
    ];



  constructor(public navCtrl: NavController) {

  }

  clickIma(contacto){

    this.navCtrl.push(this.contactos, contacto);

  }

  clickAgregar(){

   this.navCtrl.push(this.agregar, {contactos: this.Con});

  }



}
