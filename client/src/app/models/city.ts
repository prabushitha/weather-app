export class City{
  lat:number;
  lng:number;
  name:string;
  constructor(data){
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
