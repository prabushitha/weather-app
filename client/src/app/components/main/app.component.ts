import { Component, OnInit,NgZone } from '@angular/core';
import { AgmCoreModule, MouseEvent,GoogleMapsAPIWrapper,MapsAPILoader } from 'angular2-google-maps/core';
import {City} from '../../models/city';
import {Map} from '../../models/map';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'app works!';
  city:City;
  map:Map;

  //ngZone is to realtime update the scene
  constructor(private zone: NgZone){
    this.city = new City({lat:6.91415,lng:79.9694});
    this.map = new Map();
  }
  ngOnInit() {
    //get the user geolocation
    if(!!navigator.geolocation) {
        // Support
        navigator.geolocation.getCurrentPosition(this.updateMarker.bind(this));
    }
  }

  updateMarker($event){
    console.log($event);
    //let self = this;
    this.city.isweather = false;
    this.city.weather_state = "not requested";
    this.city.lat = $event.coords.latitude;
    this.city.lng = $event.coords.longitude;
    if($event["auto_focus"]!=undefined && $event["auto_focus"]==true){
      this.map.focus_lat = this.city.lat;
      this.map.focus_lng = this.city.lng;
    }


    //city name
    let geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(this.city.lat, this.city.lng);
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            //once running this updates the view realtime


                            this.zone.run(() => {
                                var address_parts = results[1].formatted_address.split(",");
                                this.city.name = address_parts[address_parts.length-2];//results[1].formatted_address;
                            });

                            console.log(results); // details address
                        } else {
                            console.log('Location not found');
                        }
                    } else {
                        console.log('Geocoder failed due to: ' + status);
                    }
                }.bind(this));
  }
}
