export class City{
  lat:number;
  lng:number;
  name:string;
  country:string;
  currency:string; 

  isweather:boolean = false;
  weather_state:string = "not requested";
  temperature:number;
  humidity:number;
  pressure:number;
  wind_speed:number;
  constructor(data){
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
