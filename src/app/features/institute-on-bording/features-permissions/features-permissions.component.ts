import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PermissionsService } from 'src/app/_api/roles and permissions/permissions.service';

@Component({
  selector: 'app-features-permissions',
  templateUrl: './features-permissions.component.html',
  styleUrls: ['./features-permissions.component.css']
})
export class FeaturesPermissionsComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  public featuresAndPermissions:any = [];

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  constructor(private _permissionsService:PermissionsService){
    this.getAllFeaturesAndPermissions();
  }

  getAllFeaturesAndPermissions(){
    this._permissionsService.getAllFeaturesAndPermissions().subscribe(
      (data:any)=>{
        this.featuresAndPermissions = data;
      }
    )
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }



}
