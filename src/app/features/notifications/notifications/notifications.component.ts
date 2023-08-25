import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NotificationsService } from 'src/app/_api/notifications/notifications.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public notifications: any;

  constructor(private _notificationservice: NotificationsService, private _alertservice: AlertService) {
    this.getNotifications();
  }


  getNotifications() {
    this._notificationservice.getNotification().subscribe(
      (data: any) => {
        this.notifications = data;
      },
      (err: any) => {
        this._alertservice.error("server unavilable")
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
