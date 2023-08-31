import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private _httpClient:HttpClient,private _userService:UserService) { }

   createInterview(data:any):Observable<any>{
    let cid = this._userService.getCid();

    data.cid = cid;
    return this._httpClient.post("http://localhost:3000/interviews",data)

   }

   getInterviewQuestions(id:any):Observable<any>{
    return this._httpClient.get("http://localhost:3000/interviews/" + id)
   }

}
