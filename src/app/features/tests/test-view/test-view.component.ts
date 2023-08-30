import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TestService } from 'src/app/_api/test/test.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public selectedQuestionIndex:any=[];

  public test:any={};

  public id:any;

  constructor(private _testService:TestService, private _alertService:AlertService,private _activatedRoute: ActivatedRoute){
   
    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        this.getTest(this.id);
      }
    )
  }

   getTest(id:any){
    this._testService.getTest(id).subscribe(
    (data:any)=>{
       this.test=data
    },
    (err:any)=>{
      this._alertService.error("internal server error")
    }
    )
   }

   selectedQuestion(i:any){
    this.selectedQuestionIndex=i;
    console.log(this.selectedQuestionIndex)


   }





  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
