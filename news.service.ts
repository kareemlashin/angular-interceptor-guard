import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _Http:HttpClient) { }
  isLoading = new BehaviorSubject<boolean>(true);

  get_one():Observable<any>{
    return this._Http.get('https://node-hnapi.herokuapp.com/news?page=6').pipe();
  }
  get_two():Observable<any>{
    return this._Http.get('https://calendarific.com/api/v2/holidays?&api_key=ecd91c6fbb6102d805501d228ee32e01d01449da&country=EG&year=2020').pipe();
  }
  get_three():Observable<any>{
    return this._Http.get('https://jsonplaceholder.typicode.com/posts/1').pipe();
  }
  get_four():Observable<any>{
    return this._Http.get('https://countriesnow.space/api/v0.1/countries/population/cities').pipe();
  }
  
  
  start(){
    this.isLoading.next(true);

  }
  
  end(){
    this.isLoading.next(false);

  }
  
}

