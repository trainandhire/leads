import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MailTestService } from 'src/app/_api/mail-test/mail-test.service';
import { UserService } from 'src/app/_api/user/user.service';

@Component({
  selector: 'app-mail-test',
  templateUrl: './mail-test.component.html',
  styleUrls: ['./mail-test.component.css']
})
export class MailTestComponent {

  public menu:any = [];
  public mailDesc:string = "";

  options = {
    close: true,
    expand: false,
    minimize: false,
    reload: true
  };
  
  imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  public breadcrumb: any;

  public emailTestForm:FormGroup = new FormGroup({
    from: new FormControl(),
    to: new FormControl(),
    cc: new FormControl(),
    subject: new FormControl(),
    salutation: new FormControl(),
    body: new FormControl(),
    signature: new FormControl(),
    id: new FormControl(),
    scores: new FormGroup({})
  })

  public selectedEamilId:string = "";

  public mailSubmissionData:any = null;

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  constructor(private _mailTestService: MailTestService, private _userService: UserService){

    this._mailTestService.getMailTestMenu().subscribe(
      (data:any)=>{
        this.menu = data;
      }
    );

    this._mailTestService.getmailSubmissions(this._userService.getCurrentUserId()).subscribe(
      (res:any)=>{
        this.mailSubmissionData = res.payload.data();
        console.log(this.mailSubmissionData);
      },
      (err:any)=>{
        console.log(err);
      }
    );

  }

  loadMailDesc(id:any){
    console.log(id);
    this.selectedEamilId = id;
    this._mailTestService.getMailText(id).subscribe(
      (res:any)=>{    
        let data:any = res.payload.data();
        console.log(data);
        this.mailDesc = data.desc;
        // this.initData();
      }
    )
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

  sendEmail(){
    console.log(this.emailTestForm.value);
    this.emailTestForm.value.id = this.selectedEamilId;
    if(this.mailSubmissionData){
      this.mailSubmissionData['submittedMails'].push(this.emailTestForm.value);
    }
    else{
      this.mailSubmissionData['submittedMails'] = [this.emailTestForm.value];
    }
    this._mailTestService.mailSubmission(this._userService.getCurrentUserId(),this.mailSubmissionData);
  }

  

}
