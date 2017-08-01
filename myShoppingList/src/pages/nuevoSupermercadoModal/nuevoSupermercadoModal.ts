import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-nuevoSupermercadoModal',
	templateUrl: 'nuevoSupermercadoModal.html'
})

export class NuevoSupermercadoModalPage{

	constructor(public modalCtrl: ModalController){}

}


//import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';




/*@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html'
})
@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}*/