import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

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


  public studentForm: FormGroup = new FormGroup({
    personalDetails: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      fatherName: new FormControl(),
      mobileNumber: new FormControl(),
      alternateMobileNumber: new FormControl(),
      email: new FormControl(),
      aadharCardNumber: new FormControl(),
      panCardNumber: new FormControl()
    }),
    addressDetails: new FormGroup({
      presentAddress: new FormGroup({
        houseNo: new FormControl(),
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        country: new FormControl(),
        pincode: new FormControl()
      }),
      perminentAddress: new FormGroup({
        houseNo: new FormControl(),
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        country: new FormControl(),
        pincode: new FormControl()
      })
    }),
    educationalDetails: new FormGroup({
      educations: new FormArray([])
    }),
    experienceDetails: new FormGroup({
      companies: new FormArray([])

    }),
    documents: new FormGroup({
      aadharcard: new FormControl(),
      panCard: new FormControl(),
      passportSizePhoto: new FormControl(),
      educationCertificates: new FormArray([])
    })
  })

  iconTab: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.iconTab = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  // education form array
  get educationsFormArray() {
    return this.studentForm.get('educationalDetails')?.get("educations") as FormArray;
  }

  addEducations() {
    this.educationsFormArray.push(
      new FormGroup({
        name: new FormControl(),
        passOut: new FormControl(),
        percentage: new FormControl()
      })
    )
  }

  remove(i: number) {
    this.educationsFormArray.removeAt(i)
  }

  // companies form array
  get companiesFormArray() {
    return this.studentForm.get("experienceDetails")?.get("companies") as FormArray
  }

  addCompanies() {
    this.companiesFormArray.push(
      new FormGroup({
        role: new FormControl(),
        companyName: new FormControl(),
        from: new FormControl(),
        to: new FormControl()
      })
    )
  }

  experiencedelete(i: number) {
    this.companiesFormArray.removeAt(i)
  }

  //  education certificates array
  get educationCertificatesFormArray() {
    return this.studentForm.get('documents').get("educationCertificates") as FormArray
  }

  addEducationCertificates() {
    this.educationCertificatesFormArray.push(
      new FormGroup({
        certificates: new FormControl()
      })
    )
  }

  removeFile(i: number) {
    this.educationCertificatesFormArray.removeAt(i);
  }

  delete(i: number) {
    this.educationCertificatesFormArray.removeAt(i)
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





