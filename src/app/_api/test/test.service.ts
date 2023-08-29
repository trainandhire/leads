import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _httpClient:HttpClient,private _userService:UserService) { }

  createtest(data:any):Observable<any>{
    let cid = this._userService.getCid();

    data.cid = cid;
    return this._httpClient.post("http://localhost:3000/tests",data)
  }
}
