import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { NuevoSupermercadoModalPage } from '../nuevoSupermercadoModal/nuevoSupermercadoModal'

@Component({
	selector: 'page-supermercados',
	templateUrl: 'supermercados.html'
})

export class SupermercadosPage{
	
	public supermercados: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public restProvider: RestProvider, ){
		//this.supermercados= ['Mercadona', 'MasyMas','Corte Ingles', 'Dia', 'Carrefour'];
		this.loadSupermercados();
	}

	loadSupermercados(){
		this.restProvider.load()
			.then(data => {
				this.supermercados = data;
			});
	}

	abrirNuevoSupermercadoModal(){
		let modal = this.modalCtrl.create(NuevoSupermercadoModalPage);
		modal.present();
	}

}


