import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html'
})
export class ListasPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirLista(){
  	this.navCtrl.push(ListaPage);
  }
}
