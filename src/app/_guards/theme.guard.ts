import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ThemeLoaderService } from '../_services/theme-loader.service';
import { UserService } from '../_api/user/user.service';
import { ThemeSettingsService } from '../_layout/settings/theme-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeGuard implements Resolve<any>{
 
  constructor(private _themeLoaderService:ThemeLoaderService,
              private _userService:UserService,
              private _themeSettingsService:ThemeSettingsService
    ) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
      
      let cid = this._userService.getCid();
      console.log("cid",cid);
      this._themeLoaderService.getThemeConfig(cid).subscribe(
        (data:any)=>{
          this._themeSettingsService.config = data.config;
          console.log("TTTTTTTheme config loaded.",data.config);
        }
      )

      return of([]);

  }
}
