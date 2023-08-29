import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeLoaderService {

  constructor(private _httpClient:HttpClient) { }

  getThemeConfig(cid:any):Observable<any>{
    return this._httpClient.get("http://localhost:3000/themeConfigs?cid="+cid)
                           .pipe(
                            map((data:any)=>{
                              if(data.length){
                                return data[0]
                              }
                              else{
                                return data;
                              }
                            })
                           )
  }

}
