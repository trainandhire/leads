import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private _httpclient:HttpClient, private _userService:UserService) { }

  getNotification():Observable<any>{
    return this._httpclient.get("http://localhost:3000/notifications")
  }

  createNotification(data:any):Observable<any>{
    let cid = this._userService.getCid();
    let uid = this._userService.getCurrentUserId();
    
    data.cid = cid;
    data.uid = uid;

    return this._httpclient.post("http://localhost:3000/notifications",data)
  }
}
