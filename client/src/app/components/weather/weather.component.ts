import { Component, Input,ViewEncapsulation } from '@angular/core';
import {City} from '../../models/city';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html',
  styleUrls: ['weather.css'],
  providers: [WeatherService]
})

export class WeatherComponent {
  @Input() city: City;
  constructor(private weatherService:WeatherService){

  }
  getweather(){
    //alert(this.city.name);
    this.city.weather_state = "requested";
    this.weatherService.getCityWeather(this.city.name).subscribe(
      data => this.updateWeather(data),
      error => alert(error)
    );
  }
  updateWeather(weather){
    console.log(weather);
    this.city.weather_state = "served";
    this.city.isweather = true;
    this.city.temperature = weather.temperature;
    this.city.humidity = weather.humidity;
    this.city.wind_speed = weather.wind_speed;
    this.city.pressure = weather.pressure;
  }
}
