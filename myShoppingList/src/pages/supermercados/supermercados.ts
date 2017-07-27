import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-supermercados',
	templateUrl: 'supermercados.html'
})

export class SupermercadosPage{

	supermercados: string[];
	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.supermercados= ['Mercadona', 'MasyMas','Corte Ingles', 'Dia', 'Carrefour'];
	}
}


