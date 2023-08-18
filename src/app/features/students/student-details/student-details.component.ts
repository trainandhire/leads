import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public students: any = [];

  constructor(private _httpclient: HttpClient) {
    this.getStudentDetails();
  }

  getStudentDetails() {
    this._httpclient.get("/assets/data/studentDetails/studentDetails.json").subscribe(
      (data: any) => {
        this.students = [data]
      },
      (err: any) => {
        alert("internal server error")
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
