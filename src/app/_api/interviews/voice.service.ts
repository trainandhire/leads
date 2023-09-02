import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


declare var webkitSpeechRecognition: any;
declare var MediaRecorder: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;

  records$ = new BehaviorSubject(null);
  recording = null;
  mediaRecorder;
  mediaObserver;
  audio;
  stream;

  constructor() {
    this.records$.subscribe((val) => console.log('vs', val));
  }

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log('temp', transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log('Speech recognition started');
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log('End speech recognition');
      } else {
        this.wordConcat();
        this.recognition.start();
        this.onRecord();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
    console.log('End speech recognition');

    this.mediaRecorder.stop();
    setTimeout(
      () => this.stream.getTracks().forEach((track) => track.stop()),
      0
    );
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }

  getRecords() {
    return this.records$.asObservable();
  }

  onRecord() {
    console.log('onRecord called');
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      console.log('init');
      this.stream = stream;
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.start();

      const audioChunks = [];
      this.mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunks.push(event.data);
      });

      this.mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        this.audio = new Audio(audioUrl) as HTMLAudioElement;
        console.log('stoped', this.audio);

        let newSet: [{ media: HTMLAudioElement; lable: string }];
        if (this.records$.getValue()) {
          newSet = this.records$.getValue();
          newSet.push({ media: this.audio, lable: this.text });
          this.records$.next(newSet);
        }
        this.records$.next([{ media: this.audio, label: this.text }]);
        console.log("recoding updated ************")
      });
    });
  }

  
}
