import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PermissionsService } from 'src/app/_api/roles and permissions/permissions.service';
import { RolesAndPermissionsService } from 'src/app/_api/roles and permissions/roles-and-permissions.service';
import { TypingService } from 'src/app/_api/typing/typing.service';
import { UserService } from 'src/app/_api/user/user.service';
import { AlertService } from 'src/app/_services/alert.service';

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
  public rolesAndPermissions: any = [];
  public selectedRoleNameForManage: any = "";

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public typingResults: any;

  public breadcrumb:any = {
    'mainlabel': 'Horizontal Forms',
    'links': [
      {
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      },
      {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      },
      {
        'name': 'Horizontal Forms',
        'isLink': true

      }
    ]
  };

  constructor(private modalService: NgbModal, 
              private _typingService: TypingService, 
              private _permissionsService: PermissionsService, 
              private _rolesAndPermissionsService:RolesAndPermissionsService,
              private _userService: UserService,
              private _alertService: AlertService
              ) {
    this.getAllRolesAndPermissionsOfClient();
    this.getTypingPrograss();
    this.getAllFeaturesAndPermissions();
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
  manageRolesModel(RoleModelContent,role) {
    this.selectedRoleNameForManage = role.name;
    this.mapRolePermissionsWithAllFeaturesAndPermissions(role);
    this.modalService.open(RoleModelContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  // ====================================

  getAllRolesAndPermissionsOfClient() {

    let cid = this._userService.getCid();

    this._rolesAndPermissionsService.getAllRolesAndPermissionsOfClient(cid).subscribe(
      (data:any)=>{
        this.rolesAndPermissions = data[0];
        console.log("rolesAndPermissions",this.rolesAndPermissions);
      }
    )

  }

  getAllFeaturesAndPermissions() {
    this._permissionsService.getAllFeaturesAndPermissions().subscribe(
      (data: any) => {
        this.featuresAndPermissions = data;
      }
    )
  }

  mapRolePermissionsWithAllFeaturesAndPermissions(role){
    this.featuresAndPermissions.forEach((feature:any)=>{

      feature.permissions.forEach((permission:any)=>{
        permission.isAllow = false;
        if(role.permissions.includes(parseInt(permission.code))){
          permission.isAllow = true;
        }
      })

    })
    console.log(this.featuresAndPermissions);
  }

  changeRolePermission(code:any, isAllow:boolean){
    code = parseInt(code);
    this.rolesAndPermissions.roles.forEach((role:any)=>{
      console.log(role.name,this.selectedRoleNameForManage);
      if(role.name == this.selectedRoleNameForManage){
        if(isAllow){
          role.permissions.push(code);
        }
        else{
          let index = role.permissions.indexOf(code);
          role.permissions.splice(index,1);
        }
      }
    });

    console.log("NNNNNNNNNN",this.rolesAndPermissions);
 
    this._rolesAndPermissionsService.updateRoleAndPermissions(this.rolesAndPermissions).subscribe(
      (data:any)=>{
        this._alertService.success("Permissions updated.");
      },
      (err:any)=>{
        this._alertService.error("Permissions updation failed.");
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
