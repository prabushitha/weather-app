import { Component, Input,Output, EventEmitter } from '@angular/core';
import { AgmCoreModule, MouseEvent } from 'angular2-google-maps/core';
import {City} from '../../models/city';


@Component({
  selector: 'map',
  templateUrl: '../map/map.html',
  styleUrls: ['../map/map.css']
})

export class MapComponent {
  title = 'app works!';
  zoom:number = 11;
  focus_lat: number =  6.914157271085624;
  focus_lng: number =  79.969482421875;
  @Input() marker: City;
  @Output() markerChange: EventEmitter<any> = new EventEmitter();

  mapClicked($event:MouseEvent){
    //emit the change to other components
    let position = {coords:{latitude:$event.coords.lat, longitude:$event.coords.lng}};
    this.markerChange.emit(position);
  }


}
