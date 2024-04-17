import { Component, OnInit } from '@angular/core';
import { CurrentService } from './services/current.service';
import { Icurrency } from './model/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'currencytask';
  currency2!: Array<Icurrency>
  basecurrency ! : string;
  targetcurrency ! :string
  amount : number = 1;
  result : number = 0;
  
constructor(private _current : CurrentService){
 
  
}


  ngOnInit(): void {
  this._current.fetchAllcurre()
  .subscribe((res=>{
    console.log(res);
    this.currency2= res
    console.log(this.currency2);
    
    
    
  }))
   
  }
  onconvert(){
    this._current.getcode(this.basecurrency)
    .subscribe((res =>{
      this.result = res.conversion_rates[this.targetcurrency] * this.amount;
      console.log(this.result);
      
    }))
    
  }

}
