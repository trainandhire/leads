import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { format } from 'path';
import { NotificationsService } from 'src/app/_api/notifications/notifications.service';
import { AlertService } from 'src/app/_services/alert.service';

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

  public multipleSelectArray: any;
  public multipleMultiSelect: any = [];

  public notifications: any;
  public batchesArray: any;
  public rolesmultiselect: any = [];
  public batchesMultiSelect: any = [];

  public notificationInfo: FormGroup = new FormGroup({
    header: new FormControl(),
    body: new FormControl(),
    type: new FormControl(),
    roles: new FormControl(),
    batches: new FormControl(),
    fileArray: new FormArray([])
  })

  get fileArray() {
    return this.notificationInfo.get('fileArray') as FormArray;
  }

  constructor(private _notificationserver: NotificationsService, private _alertservice: AlertService) {
    this.multipleMultiSelect = [];
    this.addFile();
    this.multipleSelectArray = [
      {
        "item_id": 1, "item_text": "Info"
      },
      {
        "item_id": 2, "item_text": "warning"
      },
      {
        "item_id": 3, "item_text": "message"
      },

    ]
    this.notifications = [
      {
        "item_id": 1, "roles": "Admin"
      },
      {
        "item_id": 2, "roles": "Instructor"
        },
      {
        "item_id": 2, "roles": "Sub-Instructor"
      }
    ]
    this.batchesArray = [
      {
        "item_id": 1, "batches": "B1"
      },
      {
        "item_id": 2, "batches": "B2"
      },
      {
        "item_id": 2, "batches": "B3"
      }

    ]

  }

  createnotification() {
    this._notificationserver.createNotification(this.notificationInfo.value).subscribe(
      (data: any) => {
        this._alertservice.success("Notification Created Succussfully")
      },
      (err: any) => {
        this._alertservice.error("Notification Not Created")
      }
    )
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
