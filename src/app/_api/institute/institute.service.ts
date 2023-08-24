import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private _httpClient: HttpClient) { }

  getInstitutes():Observable<any>{
   return  this._httpClient.get("http://localhost:3000/institutes")
  }

  getInstitute(id:any):Observable<any>{
    return  this._httpClient.get("http://localhost:3000/institutes/"+id);
   }
 

  createInstitute(data: any): Observable<any> {
    return this._httpClient.post("http://localhost:3000/institutes", data)
  }





}
