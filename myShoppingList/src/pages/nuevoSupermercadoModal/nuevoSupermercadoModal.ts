import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'page-nuevoSupermercadoModal',
	templateUrl: 'nuevoSupermercadoModal.html'
})

export class NuevoSupermercadoModalPage{

	formSupermercado: FormGroup;

	constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, private formBuilder: FormBuilder){
		this.formSupermercado = formBuilder.group({
			'name': ['', Validators.required]
		});
	}

	closeModal(){
		this.viewCtrl.dismiss();
	}

	guardarSupermercado(){
    	/*alert(JSON.stringify(this.formSupermercado.value));
    	console.log(this.formSupermercado.value + "hola");*/
  	}

}
