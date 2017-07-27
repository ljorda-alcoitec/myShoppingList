import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-lista',
	templateUrl: 'lista.html'
})

export class ListaPage {

	listaSeleccionada: any;
	productos: string[];
	categorias: string[];

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.listaSeleccionada = navParams.get('lista');
		this.categorias = ['Panaderia', 'Carniceria', 'Pescateria'];
		this.productos = [];

		for (let i = 1; i < 6; i++){
			this.productos.push('Producto ' + i);
		}
	}
}
