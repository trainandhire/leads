import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PermissionsService } from 'src/app/_api/roles and permissions/permissions.service';
import { AlertService } from 'src/app/_services/alert.service';

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

  public AllFeaturesAndPermissions: any = [];
  public featuresAndPermissions: any = [];
  public selectedFeaturesForFilter: any = [];
  public selectedFeature: any = {};

  public multipleChapterMultiSelect: any = [];


  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;


  public featureForm: FormGroup = new FormGroup({
    name: new FormControl(),
    label: new FormControl()
  });

  public permissionForm: FormGroup = new FormGroup({
    name: new FormControl(),
    label: new FormControl(),
    code: new FormControl(),
  })


  constructor(private _permissionsService: PermissionsService, private _alertService: AlertService, private modalService: NgbModal) {
    this.multipleChapterMultiSelect = [];
    this.getAllFeaturesAndPermissions();

  }

  getAllFeaturesAndPermissions() {
    this._permissionsService.getAllFeaturesAndPermissions().subscribe(
      (data: any) => {
        this.AllFeaturesAndPermissions = data;
        this.featuresAndPermissions = data;
      }
    )
  }

  filterFeatures() {
    this._permissionsService.filterFeatures(this.selectedFeaturesForFilter).subscribe(
      (data: any) => {
        this.featuresAndPermissions = data;
      }
    )
  }

  createFeature() {
    this._permissionsService.createFeature(this.featureForm.value).subscribe(
      (data: any) => {
        this._alertService.success("Feature Created.");
        this.modalService.dismissAll();
        this.getAllFeaturesAndPermissions();
      },
      (err: any) => {
        this._alertService.error("Feature Creation failed.")
      }
    )
  }

  editFeature() {
    this._permissionsService.editFeature(this.featureForm.value, this.selectedFeature).subscribe(
      (data: any) => {
        this._alertService.success("Feature Edited Successfully.");
        this.modalService.dismissAll();
        this.getAllFeaturesAndPermissions();
      },
      (err: any) => {
        this._alertService.error("Feature Creation failed.")
      }
    )
  }

  deleteFeature(feature) {
    this._permissionsService.deleteFeature(feature).subscribe(
      (data: any) => {
        this._alertService.success("Feature Delted..");
        this.modalService.dismissAll();
        this.getAllFeaturesAndPermissions();
      },
      (err: any) => {
        this._alertService.error("Feature Deletion Failed.")
      }
    )
  }


  createPermission() {
    this._permissionsService.createPermission(this.permissionForm.value, this.selectedFeature).subscribe(
      (data: any) => {
        this._alertService.success("Feature Created.");
        this.modalService.dismissAll();
        this.getAllFeaturesAndPermissions();
      },
      (err: any) => {
        this._alertService.error("Feature Creation failed.")
      }
    )
  }

  editPermission() {
    this._permissionsService.editPermission(this.permissionForm.value, this.selectedFeature).subscribe(
      (data: any) => {
        this._alertService.success("Permission updated.");
        this.modalService.dismissAll();
        this.getAllFeaturesAndPermissions();
      },
      (err: any) => {
        this._alertService.error("Permission updation failed.")
      }
    )
  }



  AddNewPermissions(AddNewPermissionsContent: any, feature: any) {
    this.selectedFeature = feature;
    this.permissionForm.reset();
    this.modalService.open(AddNewPermissionsContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  editPermissionModelOpen(EditPermisssionContent, feature, permission) {
    this.selectedFeature = feature;
    this.permissionForm.patchValue(permission);
    this.modalService.open(EditPermisssionContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  AddFeature(AddFeatureContent) {
    this.featureForm.reset();
    this.modalService.open(AddFeatureContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  editFeatureModelOpen(EditFeatureContent: any, feature: any) {
    this.selectedFeature = feature;
    this.featureForm.patchValue(feature);
    this.modalService.open(EditFeatureContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  deletePermission(feature: any, permission: any) {
    this._permissionsService.deletePermission(feature, permission).subscribe(
      (data: any) => {
        this._alertService.success("Permission deleted");
      },
      (err: any) => {
        this._alertService.error("Permission deletion failed.")
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


