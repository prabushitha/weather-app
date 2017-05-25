import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//google maps using angular maps
import { AgmCoreModule } from "angular2-google-maps/core";

//app components
import { AppComponent } from './components/main/app.component';
import { MapComponent } from './components/map/map.component';
import { CityComponent } from './components/city/city.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchComponent } from './components/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CityComponent,
    WeatherComponent,
    SearchComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      //apiKey: "AIzaSyAshN3KKFFMBQYr_kRUDOES0MFfm5X-xqY"
      apiKey:"AIzaSyBPKyiDWDZrgBz_C0g_lTpuJQv7K18mbF0",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
