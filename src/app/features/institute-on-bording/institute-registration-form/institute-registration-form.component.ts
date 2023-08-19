import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

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
      BranchOne: new FormGroup({
        houseNo: new FormControl(),
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        country: new FormControl(),
        pincode: new FormControl()
      }),
      BranchTwo: new FormGroup({
        houseNo: new FormControl(),
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        country: new FormControl(),
        pincode: new FormControl()
      })
    }),
    documents: new FormGroup({
      logo: new FormControl(),
      banner: new FormControl(),
    })
  })

  iconTab: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.iconTab = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }


  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

  submit() {
    window.alert('Form submitted.');
  }

}