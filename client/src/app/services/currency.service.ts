import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {
  private serviceurl:string ;
	constructor(private _http: Http){
		this.serviceurl = 'https://restcountries.eu/rest/v2/name/'
	}
	getCountryCurrency(country){
		return this._http.get(this.serviceurl+country.trim().replace(/ *\([^)]*\) */g, "")+'?fullText=true').map(res => res.json());
	}

}
