import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//google maps using angular maps
import { AgmCoreModule } from "angular2-google-maps/core";

//app components
import { AppComponent } from './components/main/app.component';
import { MapComponent } from './components/map/map.component';
import { CityComponent } from './components/city/city.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CityComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAshN3KKFFMBQYr_kRUDOES0MFfm5X-xqY"
    }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
