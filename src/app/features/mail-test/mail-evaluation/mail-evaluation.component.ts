import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MailTestService } from 'src/app/_api/mail-test/mail-test.service';

@Component({
  selector: 'app-mail-evaluation',
  templateUrl: './mail-evaluation.component.html',
  styleUrls: ['./mail-evaluation.component.css']
})
export class MailEvaluationComponent {

  public submittedMails:any=[];


  public selectedBody:string = "";

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;
  // constructor(private modalService: NgbModal) {
  constructor(private _mailTestService:MailTestService,private modalService: NgbModal){
    this.getSubmittedMails();
  }

  getSubmittedMails(){
    this._mailTestService.getSubmittedMails().subscribe(
      (data:any)=>{
      this.submittedMails=data
      },
      (err:any)=>{
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

  LargeModel(LargeModelContent,body:string) {
    this.selectedBody = body;
    this.modalService.open(LargeModelContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  HighModel(LargeModelContent,body:string) {
    this.selectedBody = body;
    this.modalService.open(LargeModelContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }
  

}
