import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesAndPermissionsService {

  constructor(private _httpClient:HttpClient) { }

  getAllRolesAndPermissionsOfClient(cid:any):Observable<any>{
    return this._httpClient.get("http://localhost:3000/roles?cid="+cid);
  }

  updateRoleAndPermissions(role:any):Observable<any>{
    return this._httpClient.put("http://localhost:3000/roles/"+role.id, role);
  }

}
