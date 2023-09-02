import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { InstituteService } from 'src/app/_api/institute/institute.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-institute-registration-form',
  templateUrl: './institute-registration-form.component.html',
  styleUrls: ['./institute-registration-form.component.css']
})
export class InstituteRegistrationFormComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  public options = {
    minimize: true,
    reload: true,
    expand: true,
    close: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;
  @BlockUI('numberTabs') blockUINumberTabs: NgBlockUI;
  @BlockUI('iconTabs') blockUIIconTabs: NgBlockUI;


  public instituteForm: FormGroup = new FormGroup({
    instituteInfo: new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      prefix: new FormControl()
    }),
    addressDetails: new FormGroup({
      Branches: new FormArray([]),
    }),

    socialMediaInfo: new FormGroup({
      website: new FormControl(),
      twitter: new FormControl(),
      instagram: new FormControl(),
      facebook: new FormControl() 
    }),
    documents: new FormGroup({
      logo: new FormControl(),
      banner: new FormControl(),
    })
  })

  iconTab: FormGroup;

  public id:any='';

  public showButton:any;

  constructor(private _activatedRoute:ActivatedRoute, private formBuilder: FormBuilder, private _alertservice: AlertService, private _instituteService: InstituteService) {
    this.iconTab = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id
      }
    )
      
    _instituteService.getInstitute(this.id).subscribe(
      (data:any)=>{
        this.instituteForm.patchValue(data);
      }
    )

    this.showButton = this.id ? "update": "create";

    this.addBranches();

  }

  get branchesFormArray() {
    return this.instituteForm.get("addressDetails").get("Branches") as FormArray
  }

 


  
  



  addBranches() {
    this.branchesFormArray.push(
      new FormGroup({
        houseNo: new FormControl(),
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        country: new FormControl(),
        pincode: new FormControl()
      })
    )
  }
  
  createInstitute(){
    if(this.id.length>0){
      this._instituteService.updateInstitute(this.id,this.instituteForm.value).subscribe(
        (data:any)=>{
          this._alertservice.success("update successfully")
        },
        (err:any)=>{
          this._alertservice.error("Not Updated")
        }
      )
    }
    else{
      this._instituteService.createInstitute(this.instituteForm.value).subscribe(
            (data : any) => {
              this._alertservice.success("Form Submitted successfullly")
            },
      )
    }
  }
  

  delete(i: number) {
    this.branchesFormArray.removeAt(i);
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }



  

}
