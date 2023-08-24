import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { format } from 'path';

@Component({
  selector: 'app-create-notifications',
  templateUrl: './create-notifications.component.html',
  styleUrls: ['./create-notifications.component.css']
})
export class CreateNotificationsComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;


  public notificationInfo: FormGroup = new FormGroup({
    header: new FormControl(),
    body: new FormControl(),
    type: new FormControl(),
    attachments: new FormArray([]),
    roles: new FormControl(),
    Batches: new FormControl(),
  })

  public uploadFileForm: FormGroup = new FormGroup({
    fileArray: new FormArray([])

  })

  get fileArray() {
    return this.uploadFileForm.get('fileArray') as FormArray;
  }

  constructor() {
    this.addFile();
  }
  submit() {
    console.log(this.notificationInfo)
  }

  addFile() {
    this.fileArray.push(
      new FormGroup({
        file: new FormControl()
      })
    )
  }
  removeFile(i: number) {
    this.fileArray.removeAt(i);
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
