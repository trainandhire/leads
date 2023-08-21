import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private auth$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private _httpClient: HttpClient) {

    let localStorageUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("CurrentUserinLOcal",localStorageUser);
    this.auth$.next(localStorageUser)

  }

  doRegister(user:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/users",user);
  }

  doLogin(user:any):Observable<any>{
    return this._httpClient.get("http://localhost:3000/users",user)
               .pipe(
                  map((users:any)=>{

                    let registerUser = users.find((value:any) => value.email == user.email);
                    
                    if(registerUser){
                      if(registerUser.password = user.password){
                        let user = { ...this.getUserSample(),...registerUser };
                        this.signIn(user);
                        return user;
                      }
                      else{
                        throw new Error('Password missmatch.');  
                      }
                    }
                    else{
                      throw new Error('You are not registered.');
                    }

                  })
               )
  }
 
  // Login simulation - in future use this
  signIn(user:any) {
    console.log("subjecct set user",user);
    this.auth$.next(user);
  }

  // Logout simulation - in future use this
  signOut() {
    this.auth$.next(null);
  }

  // Get User logged status
  get isLogged$(): Observable<boolean> {
    return this.auth$.pipe(
      map(auth => auth && auth.stsTokenManager && auth.stsTokenManager.accessToken)
    );
  }
  
  // Get User Role
  get role$(): Observable<string> {
    return this.auth$
      .pipe(
        map(auth => auth ? auth.role : null),
      );
  }

   // Get User Permissions
   get permissions$(): Observable<number[]> {
    this.auth$.asObservable().subscribe(
      (data:any)=>{
        console.log("auth service",data)
      }
    )
    return this.auth$
      .pipe(
        map(auth => auth ? auth.permissions : null),
      );
  }

  







  // UITILITIES
  getUserSample(){
    return  {
      "uid": "Mhdse5jkdafCl0G7XZC7R4xcIJS2",
      "email": "akhilg.3m@gmail.com",
      "emailVerified": true,
      "displayName": "Chandra Shekar",
      "isAnonymous": false,
      "photoURL": "https://lh3.googleusercontent.com/a/AGNmyxZ9XpO-YsN2UqL_1FpDghPxU-Qv-1E6oA85bSxn=s96-c",
      "providerData": [
          {
              "providerId": "google.com",
              "uid": "100572988874272507079",
              "displayName": "Chandra Shekar",
              "email": "akhilg.3m@gmail.com",
              "phoneNumber": null,
              "photoURL": "https://lh3.googleusercontent.com/a/AAcHTtf-mbrBF6yUQHUofyKfFRfsWtd9S-hRc4zGhexDlSH-=s96-c"
          }
      ],
      "stsTokenManager": {
          "refreshToken": "AMf-vByhJWDJ_ZWL6DpEVFBVqMERwc7LSQ_vOHGOkfECQqYxCvyYwXsMn01sdRaCnryZ_h_1ZQek0troiS5JcGa3B-uBG_3mldKx3w6oGzzrNaLtfOTZ_2RMrlzVieCirKQhGryxsRBC8ja5g5T9xCbhmZzJlAxFAEwYXTAK725mYAGCC6s25SFtd5A8URKOnIYLJ0DNUICFWGIiW9xjYXNpnxKskk3gQBfGVXNYn3WlkjmKs41z9UZH21Kd2XX8UEGyS_o-8qsodgfy4WvlTSyzoAgncnlZ7HuUcynORd4ifCPI-6uXGn20dl7-Yq5XmGu7E0svwdmKAjP8GtGE4oH_HFAmqAraUVKPm3IR5QkADkjH0Sb-799IPpW7uOBNDjWNi9jqFf7L6K1b3-kl_PiHfYA4qMa7qvcRfkEMdo-LrRswRB9jbNo",
          "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzODBlZjEyZjk1ZjkxNmNhZDdhNGNlMzg4ZDJjMmMzYzIzMDJmZGUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWtoaWwgR2FuZ2F2YXJhcHUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4WjlYcE8tWXNOMlVxTF8xRnBEZ2hQeFUtUXYtMUU2b0E4NWJTeG49czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaW1zYS0xMTJjOSIsImF1ZCI6Imltc2EtMTEyYzkiLCJhdXRoX3RpbWUiOjE2OTI0NTMxNjIsInVzZXJfaWQiOiJNaGRzZTVqa2RhZkNsMEc3WFpDN1I0eGNJSlMyIiwic3ViIjoiTWhkc2U1amtkYWZDbDBHN1haQzdSNHhjSUpTMiIsImlhdCI6MTY5MjQ1MzE2MiwiZXhwIjoxNjkyNDU2NzYyLCJlbWFpbCI6ImFraGlsZy4zbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDU3Mjk4ODg3NDI3MjUwNzA3OSJdLCJlbWFpbCI6WyJha2hpbGcuM21AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.LqolQhSxRgt1nNhXkBJzp-6eytizc4Z4eOraUdeetLMsgKCL7A6H_DeitS4Rvg8CQCI3dxhF6qzXTMlMA_d1mQ5WhBpK8jY4fw497dFduC0rAaLFox-tgNS-jhwchVewnJt8Gxt3c4DDkiM9lhKPbTX7Bxr8Pz0cjSGWLlkihFqKzJvgdh9j1gr_7ZHG1U-9c2xKOptkE5O0CI2mHscbdLvkvEXElwniMMdriwREGRi0X9cnC_GkEQoL91wDuQH9gZlcNAqXDdi_rFYUONihqAsWyojFP8BgURRIqwlPXkQRGB0BKXd4kpT6mb0_02aI9ccQPKuVeDTDhAbmSsOOVg",
          "expirationTime": 1692456762907
      },
      "createdAt": "1682360975952",
      "lastLoginAt": "1692453162658",
      "apiKey": "AIzaSyD_hHusehbP_Vybrkdma0bysrf9lx34LI4",
      "appName": "[DEFAULT]"
  }
  }

}
