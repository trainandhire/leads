import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { InterviewService } from 'src/app/_api/interviews/interview.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.css']
})
export class CreateInterviewComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

   public interviewForm:FormGroup= new FormGroup ({
        questions:new FormArray([])

   })

   get questionsArray(){
    return this.interviewForm.get("questions") as FormArray;
  }

  constructor(private _interviewService:InterviewService,private _alertService:AlertService){}

  CreateInterview(){
    this._interviewService.createInterview(this.interviewForm.value).subscribe(
      (data:any)=>{
         this._alertService.success("created Successfully")
      },
    (err:any)=>{
      this._alertService.error("interview not created")
    }
    )
  }

  addQuestions(){
    this.questionsArray.push(
      new FormGroup({
        question: new FormControl(),
        attachment:new FormControl(),
      })
    )
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
