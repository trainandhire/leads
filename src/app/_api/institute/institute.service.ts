import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private _httpClient:HttpClient) { }

   postInstituteForm(data:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/institutes",data)
   }




}
