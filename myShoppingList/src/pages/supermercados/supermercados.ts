import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
@Component({
	selector: 'page-supermercados',
	templateUrl: 'supermercados.html'
})

export class SupermercadosPage{
	
	public supermercados: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider){
		//this.supermercados= ['Mercadona', 'MasyMas','Corte Ingles', 'Dia', 'Carrefour'];
		this.loadSupermercados();
	}

	loadSupermercados(){
		this.restProvider.load()
			.then(data => {
				this.supermercados = data;
			});
	}

}


