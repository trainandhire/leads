import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AudioRecordingService } from 'src/app/_api/interviews/audio-recording.service';
import { InterviewService } from 'src/app/_api/interviews/interview.service';
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

   public id:any;
   public interview:any;
   public selectedQuestionIndex: any = [];

   showButton = false;

  constructor(private _interviewService:InterviewService,private _alertService:AlertService,private _activatedRoute: ActivatedRoute,  private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer){
   
    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        this.getInterviewQuestions(this.id);
      }
    )
    this.selectedQuestion(0);
    // --------------------------
    this.audioRecordingService
      .recordingFailed()
      .subscribe(() => (this.isRecording = false));
    this.audioRecordingService
      .getRecordedTime()
      .subscribe(time => (this.recordedTime = time));
    this.audioRecordingService.getRecordedBlob().subscribe(data => {
      this.teste = data;
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data.blob)
      );
      console.log("burl",this.blobUrl);
    });
  }

  getInterviewQuestions(id:any){
    this._interviewService.getInterviewQuestions(id).subscribe(
      (data:any)=>{
        this.interview=data
      },
    (err:any)=>{
      this._alertService.error("internal server error")
    }
    )
  }

  selectedQuestion(i: any) {
    this.selectedQuestionIndex = i;
  }

  prev(){
    if (this.selectedQuestionIndex > 0) {
      this.selectedQuestionIndex--;
      
    }
  }

  next(selectedQuestionIndex){
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

  // audio recording

  isRecording = false;
  recordedTime;
  blobUrl;
  teste;

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

  download(): void {
    console.log(this.teste);
    console.log(this.teste.blob);
    console.log(window.URL.createObjectURL(this.teste.blob));
    const url = window.URL.createObjectURL(this.teste.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = this.teste.title;
    link.click();
  }

// end of Audio recording

}


