import { Component, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: 'city.html',
  styleUrls: ['city.css']
})

export class CityComponent {
  @Input() name: string;
  @Input() country:string;
}
