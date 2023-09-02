import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { InterviewService } from 'src/app/_api/interviews/interview.service';
import { VoiceService } from 'src/app/_api/interviews/voice.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-attend-interview',
  templateUrl: './attend-interview.component.html',
  styleUrls: ['./attend-interview.component.css']
})
export class AttendInterviewComponent {


  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public id: any;
  public interview: any;
  public selectedQuestionIndex: any = [];

  records$;

  constructor(private _interviewService: InterviewService, private _alertService: AlertService, private _activatedRoute: ActivatedRoute, public service: VoiceService, private sanitizer: DomSanitizer) {

    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        this.getInterviewQuestions(this.id);
      }
    )
    this.selectedQuestion(0);

    // -------------------

    this.service.init();
    this.records$ = this.service.getRecords();
  }

  getInterviewQuestions(id: any) {
    this._interviewService.getInterviewQuestions(id).subscribe(
      (data: any) => {
        this.interview = data
      },
      (err: any) => {
        this._alertService.error("internal server error")
      }
    )
  }

  selectedQuestion(i: any) {
    this.selectedQuestionIndex = i;
  }

  prev() {
    if (this.selectedQuestionIndex > 0) {
      this.selectedQuestionIndex--;

    }
  }

  next(selectedQuestionIndex) {
    if (selectedQuestionIndex < this.interview.questions.length - 1) {
      this.selectedQuestionIndex++;
    }
  }


  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

  // -------------------------------------------------------



  // speech to text start---

  recording = null;

  mediaRecorder;
  mediaObserver;
  audio;
  stream;


  onRecord() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.stream = stream;
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.start();

      const audioChunks = [];
      this.mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });

      this.mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        this.audio = new Audio(audioUrl);
      });
    });
  }

  onStop() {
    this.mediaRecorder.stop();
    this.stream.getTracks().forEach(track => track.stop());
  }

  onPlay() {
    this.audio.play();
    console.log("a", this.audio);
  }

  startService() {
    this.service.start();
  }

  stopService() {
    this.service.stop();
  }

}


