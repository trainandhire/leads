import { Component, DoCheck } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MailTestService } from 'src/app/_api/mail-test/mail-test.service';

@Component({
  selector: 'app-mail-evaluation',
  templateUrl: './mail-evaluation.component.html',
  styleUrls: ['./mail-evaluation.component.css']
})
export class MailEvaluationComponent {

  public submittedMails: any = [];

  public selectedBody: string = "";
  public selectedMailIndex: number = 0;

  public isAllFromChecked: boolean = false;
  public isAllToChecked: boolean = false;
  public isAllCcChecked: boolean = false;
  public isAllSubjectChecked: boolean = false;
  public isAllSalutationChecked: boolean = false;
  public isAllSignatureChecked: boolean = false;
  public isAllBodyChecked: boolean = false;

  public options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('submittedMailTableCard') blockUISubmittedMailTableCard: NgBlockUI;

  constructor(private _mailTestService: MailTestService, private modalService: NgbModal) {
    this.getSubmittedMails();
  }

  reloadSubmittedMailTableCard() {
    this.blockUISubmittedMailTableCard.start('Loading..');

    setTimeout(() => {
      this.blockUISubmittedMailTableCard.stop();
    }, 2500);
  }

  getSubmittedMails() {
    this._mailTestService.getSubmittedMails().subscribe(
      (data: any) => {
        this.submittedMails = data
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

    OneMailBody(OneMailBodyContent, body: string, index: number) {
    this.selectedBody = body;
    this.selectedMailIndex = index;
    this.modalService.open(OneMailBodyContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

    AllMailBodies(AllMailBodiesContent) {
    this.modalService.open(AllMailBodiesContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  allFromChanged() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      this.submittedMails[i].scores.from.isCorrect = !this.isAllFromChecked;
    }
    this.calculateScoresForAllMails();
  }

  allToChanged() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      this.submittedMails[i].scores.to.isCorrect = !this.isAllToChecked;
    }
    this.calculateScoresForAllMails();
  }
  allCcChanged() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      this.submittedMails[i].scores.cc.isCorrect = !this.isAllCcChecked;
    }
    this.calculateScoresForAllMails();
  }
  allSubjectChanged() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      this.submittedMails[i].scores.subject.isCorrect = !this.isAllSubjectChecked;
    }
    this.calculateScoresForAllMails();
  }
  allSalutationchanged() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      this.submittedMails[i].scores.salutation.isCorrect = !this.isAllSalutationChecked;
    }
    this.calculateScoresForAllMails();
  }
  allSignatureChanged() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      this.submittedMails[i].scores.signature.isCorrect = !this.isAllSignatureChecked;
    }
    this.calculateScoresForAllMails();
  }
  allBodyChanged() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      this.submittedMails[i].scores.body.isCorrect = !this.isAllBodyChecked;
    }
    this.calculateScoresForAllMails();
  }

  bodyChangedForOneMail(isChecked: any) {
    this.submittedMails[this.selectedMailIndex].scores.body.isCorrect = isChecked;
    this.calculateScoreForOneMail(this.selectedMailIndex);
  }

  calculateScoresForAllMails() {
    for (let i = 0; i < this.submittedMails.length; i++) {
      let total = 0;
      for (let key in this.submittedMails[i].scores) {
        if (key != 'total' && this.submittedMails[i].scores[key]?.isCorrect) {
          total += this.submittedMails[i].scores[key]?.points;
        }
      }
      this.submittedMails[i].scores.total.points = total;
    }

    this.submittedMails = [...this.submittedMails];
  }

  calculateScoreForOneMail(i: number) {
    let total = 0;
    for (let key in this.submittedMails[i].scores) {
      if (key != 'total' && this.submittedMails[i].scores[key]?.isCorrect) {
        total += this.submittedMails[i].scores[key]?.points;
      }
    }

    this.submittedMails[i].scores.total.points = total;

    this.submittedMails = [...this.submittedMails];
  }


}
