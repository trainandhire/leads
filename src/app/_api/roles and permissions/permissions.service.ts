import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private _httpClient:HttpClient) { }

  getAllFeaturesAndPermissions():Observable<any>{
    return this._httpClient.get("http://localhost:3000/allFeaturesAndPermissions");
  }

}
