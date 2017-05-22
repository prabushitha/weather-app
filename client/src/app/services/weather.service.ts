import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  private serviceurl:string ;
	constructor(private _http: Http){
		this.serviceurl = 'http://localhost:3000/weather/'
	}
	getCityWeather(city){
		return this._http.get(this.serviceurl+city).map(res => res.json());
	}
  getCoordWeather(lat, lng){
		return this._http.get(this.serviceurl+lat+'/'+lng).map(res => res.json());
	}

}
