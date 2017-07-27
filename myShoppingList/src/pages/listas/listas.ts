import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html'
})

export class ListasPage {

	listas: Array<{nombre: string, resumen: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.listas = [];

		for (let i = 0; i < 10; i++){
			this.listas.push({
				nombre: "Lista " + i,
				resumen: "Resumen" + i
			})
		}
	}

	abrirLista(event, lista){
		this.navCtrl.push(ListaPage,{
			lista: lista
		});
 	}
}
