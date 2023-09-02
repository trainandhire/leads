import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { InstituteService } from 'src/app/_api/institute/institute.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.css']
})
export class InstituteDetailsComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  public id: any = "";

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public institute: any = {};

  constructor(private _instituteService: InstituteService, private _alertservice: AlertService, private _activatedRoute: ActivatedRoute
    , private router:Router) {
    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        this.getInstituteDetails();
      }
    )
  }

  getInstituteDetails() {
    this._instituteService.getInstitute(this.id).subscribe(
      (data: any) => {
        this.institute = data
      },
      (err: any) => {
        this._alertservice.error("server unavailable")
      }
    )
  }

  edit(id){
    this.router.navigateByUrl("/institutes/edit-institute/"+ id)
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }
}
