export class City{
  lat:number;
  lng:number;
  name:string;

  isweather:boolean = false;
  weather_state:string = "not requested";
  temperature:number;
  humidity:number;
  wind_speed:number;
  constructor(data){
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
