import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }
  branches():Observable<any>{
    return this._HttpClient.get(`https://digitalbondmena.com/zSushiMobileApp/api/landingPage`)
  }
  sendData(postData:any): Observable<any>{
    return this._HttpClient.post(`https://digitalbondmena.com/zSushiMobileApp/api/landingPageData`, postData)
  }
}
