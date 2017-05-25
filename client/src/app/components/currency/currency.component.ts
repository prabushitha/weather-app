import { Component, Input,ViewEncapsulation } from '@angular/core';
import {City} from '../../models/city';
import { CurrencyService } from '../../services/currency.service';
@Component({
  selector: 'currency',
  templateUrl: 'currency.html',
  styleUrls: ['currency.css'],
  providers: [CurrencyService]
})

export class CurrencyComponent {
  @Input() city: City;
  currency:string="";
  constructor(private currencyService:CurrencyService){

  }
  getCurrency(){
    this.currencyService.getCountryCurrency(this.city.country).subscribe(
      data => this.updateCurrency(data),
      error => alert(error)
    );
  }
  updateCurrency(data){
    console.log(data);
    if(data.length>0){
      let i=0;
      let currencies = "";
      for(i=0;i<data.length;i++){
        if(currencies==""){
          currencies +=  data[i].currencies[0].code
        }else{
          currencies += currencies+","+ data[i].currencies[0].code
        }


      }
      this.city.currency = currencies;

    }else{
      this.city.currency = "Not Found";
    }


  }
}
