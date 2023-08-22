import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PermissionsService } from 'src/app/_api/roles and permissions/permissions.service';
import { TypingService } from 'src/app/_api/typing/typing.service';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  public featuresAndPermissions: any = [];

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public rolesForm: FormGroup = new FormGroup({
    roleManagement: new FormArray([])
  })

  get roleManagementFormArray() {
    return this.rolesForm.get("roleManagement") as FormArray;
  }

  public typingResults: any;

  constructor(private modalService: NgbModal, private _typingService: TypingService, private _permissionsService:PermissionsService) {
    this.getTypingPrograss();
    this.getAllPermissions();
  }


  getTypingPrograss() {
    this._typingService.getTypingTrainerSummery().subscribe(
      (data: any) => {
        this.typingResults = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

  EditModel(EditModelContent) {
    this.modalService.open(EditModelContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }
  RoleModel(RoleModelContent) {
    this.modalService.open(RoleModelContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  getAllPermissions(){
    this._permissionsService.getAllFeaturesAndPermissions().subscribe(
      (data:any)=>{
        this.featuresAndPermissions = data;
      }
    )
  }

  add() {
    this.roleManagementFormArray.push(
      new FormGroup({
        name: new FormControl(),
        role: new FormControl(),
        mobilenumber: new FormControl(),
        email: new FormControl()
      })
    )
  }


  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
