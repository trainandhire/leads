import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskEvaluationService {

  constructor(private _httpClient: HttpClient ) { }

  getTaskEvaluation(){
    return this._httpClient.get("/assets/data/task/taskevaluation.json");
  }
}
