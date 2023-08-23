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

  public multipleChapterMultiSelect: any = [];

  public multipleSelectArray: any;
  public multipleChapterSelectArray: any;

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
    this.multipleSelectArray = [
      {
        "item_id": 1, "feature_name": "S21"
      },
      {
        "item_id": 2, "feature_name": "S22"
      },
      {
        "item_id": 3, "feature_name": "S23"
      },
      {
        "item_id": 4, "feature_name": "S24"
      },
      {
        "item_id": 5, "feature_name": "S25"
      },
      {
        "item_id": 6, "feature_name": "S26"
      },
      {
        "item_id": 7, "feature_name": "S27"
      }
    ]
    this.multipleChapterSelectArray = [
      {
        "item_id": 1, "item_text": "ASDF JKL"
      },
      {
        "item_id": 2, "item_text": "ASDFG JKL"
      },
      {
        "item_id": 3, "item_text": " RTYU VBN"
      },
      {
        "item_id": 4, "item_text": "QWE IOP"
      },
      {
        "item_id": 5, "item_text": " ZXC NM"
      },
      {
        "item_id": 6, "item_text": "ALL LETTERS"
      }
    ]
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



  AddNewPermissions(AddNewPermissionsContent) {
    this.modalService.open(AddNewPermissionsContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  EditPermission(EditPermisssionContent) {
    this.modalService.open(EditPermisssionContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  AddFeature(AddFeatureContent) {
    this.modalService.open(AddFeatureContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  EditFeature(EditFeatureContent) {
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
