import { Component, Input,Output, EventEmitter, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MouseEvent, MapsAPILoader } from 'angular2-google-maps/core';
import {City} from '../../models/city';

declare let google: any;

@Component({
  selector: 'search',
  templateUrl: '../search/search.html',
  styleUrls: ['../search/search.css'],

})

export class SearchComponent {
  @ViewChild("search") public searchElementRef: ElementRef;
  @Output() onresult:EventEmitter<any> = new EventEmitter();;
  public searchControl: FormControl;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone){

    }
    ngOnInit() {

      //create search FormControl
      this.searchControl = new FormControl();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["(regions)"]
        });

        autocomplete.addListener("place_changed", () => {
          let self = this;
          this.ngZone.run(() => {
            //get the place result
            let place = autocomplete.getPlace();

            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            //console.log(self);
            let result = {
            coords:{
              latitude:place.geometry.location.lat(),
              longitude:place.geometry.location.lng()
            },
            auto_focus:true

          };
            self.onresult.emit(result);
            //set latitude, longitude and zoom
            //this.latitude = place.geometry.location.lat();
            //this.longitude = place.geometry.location.lng();
            //this.zoom = 12;
          });
        });
      });
    }

}
