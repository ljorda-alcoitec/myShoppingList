import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestProvider {

	data: any;
	getApiUrl: string;

	constructor(public http: Http) {

		this.getApiUrl = "http://localhost:3000/supermercados";
	}


	//resolveGet(url, headers, params)
	load(){
		if(this.data){
			return Promise.resolve(this.data)
		}
		return new Promise(resolve => {
		this.http.get(this.getApiUrl)
			.map(res => res.json())
			.subscribe(data => {
				this.data = data;
				resolve(this.data);
				console.log(this.data + "hola");
			});
		})
	}

	

}
