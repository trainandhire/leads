import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unsubscribe } from 'diagnostics_channel';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CountdownStatus } from 'ngx-countdown';
import { Subscription, interval } from 'rxjs';
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

  public selectedQuestionIndex: any = [];

  public test: any = {};

  public id: any;
  remainingTime: number = 10;
  totalTime: number = 60;

  timer = interval(1000);
  subscription: Subscription[] = []


  constructor(private _testService: TestService, private _alertService: AlertService, private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        this.getTest(this.id);
      }
    )
    this.selectedQuestion(0);


    this.subscription.push(this.timer.subscribe(res => {
      if (this.remainingTime != 0) {
        this.remainingTime--;
      }
      if (this.remainingTime == 0) {
        this.next(this.selectedQuestionIndex);
        this.remainingTime = 10;
      }

    })
    )

    this.timer.subscribe(res => {
      if (this.totalTime != 0) {
        this.totalTime--;
      }
    })


  }




  getTest(id: any) {
    this._testService.getTest(id).subscribe(
      (data: any) => {
        this.test = data
      },
      (err: any) => {
        this._alertService.error("internal server error")
      }
    )
  }

  public visitedQuestions: any = [];
  public answeredQuestions: any = [];




  selectedQuestion(i: any) {
    this.selectedQuestionIndex = i;
    this.questionVisited(i)
  }



  TimerEnd(i: any) {
    console.log("hello", i);
    this.next(i);


  }


  next(i: any) {
    if (i < this.test.questions.length - 1) {
      this.selectedQuestionIndex++;
      this.questionVisited(this.selectedQuestionIndex)
    }
    else {
      this.subscription.forEach(element => {
        element.unsubscribe();
      })

    }

  }



  prev(i: any) {
    if (this.selectedQuestionIndex > 0) {
      this.selectedQuestionIndex--;
      this.questionVisited(this.selectedQuestionIndex)
    }
  }



  questionVisited(i) {
    this.visitedQuestions.push(i);
    this.remainingTime = 10;
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }
  // ------------------



}


