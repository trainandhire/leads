import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TestService } from 'src/app/_api/test/test.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent {


  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public multipleSelectArray: any;
  public multipleMultiSelect: any = [];

  public testForm:FormGroup=new FormGroup({
     questions:new FormArray([]),
     
  })

    get questionsArray(){
      return this.testForm.get("questions") as FormArray;

    }
  getOptionArray(i:any){
    return this.questionsArray.controls[i].get('options') as FormArray;
  }  
   constructor(private _alertservice:AlertService, private _testService:TestService){
    this.multipleMultiSelect = [];
    this.addQuestion();
    this.multipleSelectArray = [
      {
        "item_id": 1, "item_text": "radio"
      },
      {
        "item_id": 2, "item_text": "checkbox"
      },
    ]
   }

    createTest(){
      this._testService.createtest(this.testForm.value).subscribe(
        (data:any)=>{
          this._alertservice.success("Test created SuccesFully")
        },
        (err:any)=>{
          this._alertservice.error("Test Not Created")
        }
      )
    }

  addQuestion(){
    this.questionsArray.push(
      new FormGroup({
        question: new FormControl(),
        type:new FormControl(),
        options:new FormArray([])
      })
    );

    this.addOption(this.questionsArray.controls.length-1);
    this.addOption(this.questionsArray.controls.length-1);
    this.addOption(this.questionsArray.controls.length-1);
    this.addOption(this.questionsArray.controls.length-1);
    
  } 

  submit(){
    console.log(this.testForm)
  }

  addOption(i){
    this.getOptionArray(i).push(
      new FormGroup({
        option:new FormControl(),
      })
    )
  }
  remove(j){
    this.getOptionArray(j).removeAt(j);
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
