import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  constructor(private httpclient:HttpClient) { }

  getLeads():Observable<any>{
   return this.httpclient.get("http://localhost:3000/leads");
  }

  filterLeads(term:any):Observable<any>{
    return this.httpclient.get("http://localhost:3000/leads?name="+term)
  }
}
