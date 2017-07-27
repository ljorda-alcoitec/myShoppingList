import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-lista',
	templateUrl: 'lista.html'
})

export class ListaPage {

	listaSeleccionada: any;
	productos: string[];

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.listaSeleccionada = navParams.get('lista');
		
		this.productos = [];
		for (let i = 0; i < 20; i++){
			this.productos.push('Producto ' + i);
		}
	}
}
