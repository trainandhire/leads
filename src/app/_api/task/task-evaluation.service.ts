import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskEvaluationService {

  constructor(private _httpClient: HttpClient, private _userService: UserService) { }

  getTaskEvaluation() {
    return this._httpClient.get("/assets/data/task/taskevaluation.json");
  }

  getTask(id:any):Observable<any>{
    return this._httpClient.get("http://localhost:3000/tasks/" + id);
  }

  createTask(data: any): Observable<any> {
    let cid = this._userService.getCid();

    data.cid = cid;
    return this._httpClient.post("http://localhost:3000/tasks", data)
  }
}
