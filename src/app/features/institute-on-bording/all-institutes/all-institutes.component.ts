import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { InstituteService } from 'src/app/_api/institute/institute.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-all-institutes',
  templateUrl: './all-institutes.component.html',
  styleUrls: ['./all-institutes.component.css']
})
export class AllInstitutesComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;


  public institutes: any;

  constructor(private _instituteservice: InstituteService, private _alertservice: AlertService) {
    this.getInstitutes();
  }

  getInstitutes() {
    this._instituteservice.getInstitutes().subscribe(
      (data: any) => {
        this.institutes = data
      },
      (err: any) => {
        this._alertservice.error("server unavailable")
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
