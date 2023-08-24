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

  filterFeatures(selectedFeatureIds):Observable<any>{
    
    let filterQuery = "";
    selectedFeatureIds.forEach((featureId:any,index:number)=>{
      if(index!=0){
        filterQuery += "&";
      }
      filterQuery += "id="+featureId
    })
    return this._httpClient.get("http://localhost:3000/allFeaturesAndPermissions?"+filterQuery);    
  }

  createFeature(feature:any):Observable<any>{
    feature.permissions = [];
    return this._httpClient.post("http://localhost:3000/allFeaturesAndPermissions",feature);
  }

  editFeature(featureUpdateInfo:any, feature:any){
    return this._httpClient.put("http://localhost:3000/allFeaturesAndPermissions/"+feature.id,featureUpdateInfo);
  }

  deleteFeature(feature:any){
    return this._httpClient.delete("http://localhost:3000/allFeaturesAndPermissions/"+feature.id);
  }

  createPermission(permission:any, feature:any):Observable<any>{
    feature.permissions.push(permission);
    return this._httpClient.put("http://localhost:3000/allFeaturesAndPermissions/"+feature.id, feature);
  } 

  editPermission(permission:any, feature:any){
    feature.permissions = feature.permissions.map((value:any)=>{
      if(value.code==permission.code){
        return permission;
      }
      else{
        return value;
      }
    });
    return this._httpClient.put("http://localhost:3000/allFeaturesAndPermissions/"+feature.id,feature);
  }

  deletePermission(feature:any,permission:any):Observable<any>{
    // return this._httpClient.delete("http://localhost:3000/allFeaturesAndPermissions")
    feature.permissions = feature.permissions.filter((value:any)=>value.code!=permission.code);
    return this._httpClient.put("http://localhost:3000/allFeaturesAndPermissions/"+feature.id, feature);
  }

    

}
