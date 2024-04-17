import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Icurrency } from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {
// postUrl : string =` https://v6.exchangerate-api.com/v6/f9112f380c25b0924797ea60/latest/USD`
postId = 'f9112f380c25b0924797ea60';
posrUrl =' https://v6.exchangerate-api.com/v6'
currenyUrl = `${this.posrUrl}/${this.postId}/latest/USD`
  constructor( private _http :HttpClient) { }


  fetchAllcurre(): Observable<any>{
   return this._http.get<any>(this.currenyUrl)
   .pipe(
    map((res : Icurrency)=>{
      let currentarr : Array<any>=[]
      for (const key in res.conversion_rates) {
         currentarr.push(key)

      }
      return currentarr
    })
   )
   
   
  }
  getcode(current : string){
    let codeUrl = `${this.posrUrl}/${this.postId}/latest/${current}`;
    return this._http.get<any>(codeUrl)
    
    

  }
  
}
