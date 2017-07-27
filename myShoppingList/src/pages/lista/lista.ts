import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-lista',
	templateUrl: 'lista.html'
})

export class ListaPage {

	productos: string[];

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.productos = [];
		for (let i = 0; i < 20; i++){
			this.productos.push('Producto ' + i);
		}
	}
}
