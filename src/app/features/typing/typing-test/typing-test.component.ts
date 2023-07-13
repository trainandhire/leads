import { Component, ElementRef, ViewChild } from '@angular/core';
import { TypingService } from 'src/app/_api/typing/typing.service';
import { UserService } from 'src/app/_api/user/user.service';

interface Typing {
  value: string;
  active: boolean;
  status: string;
}


@Component({
  selector: 'app-typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.css']
})
export class TypingTestComponent {

  @ViewChild('welcomeRef', { static: true }) welcomeRef!: ElementRef;

  public menu:any = [];

  public data: Typing[] = [];
  public text = "";
  
  public seconds:number = 1000;
  public time:string = "";
  public timeInterval:any;

  public totalWords:number = 0;
  public successWords:number = 0;
  public wrongWords:number = 0;

  public isCompleted:boolean = false;
  public WPM:number = 0;
  public accuracy:number = 0;
  public isMaxWPMbutLowAccuracy:boolean = false;

  public typingScoreDoc:any = {};
  public typingId:string="";

  constructor(private _typingService: TypingService, private _userService:UserService){
  }

  ngOnInit(): void {
    // play welcome
    this.playAudioJS(`https://id1945.github.io/typing/assets/welcome.mp3?v=${Date.now()}`, 1);

    // MENU
    this._typingService.getTypingMenu().subscribe(
      (data:any)=>{
        this.menu = data;

        // Max score adding in menu
        this._typingService.getTypingScores(this._userService.getCurrentUserId()).subscribe(
          (res:any)=>{
            this.typingScoreDoc = res.payload.data();
            this.menu = this.menu.map((item:any) => {
                if(item.children){
                  for(let child of item.children){
                    let score:any = this.typingScoreDoc.scores.filter((ele:any) => ele.id == child.id)[0];
                    if(score){
                      child.maxWPM = score.maxWPM;
                    } 
                  }
                }
                return item;
            })
          }
        )

      }
    );

    // init data
    this.initData();
  }
  
  initData() {
    if(this.text?.length){
      /**
       * Convert text to array
       * Random item
       */
      // const strArr = this.shuffleArray(this.text.split(' '));
      const strArr = this.text.split(' ');

      /**
       * Active
       */
      this.data = strArr.map((m: string, i: Number) => ({
        value: m,
        active: i == 0 ? true : false,
        status: i == 0 ? 'label-default' : '',
      }));

      this.totalWords = this.data.length;
    }
  }

  /**
   * Space event
   * @param e 
   */
  onSpace(e: any) {

    // succes/wrong words colors
    this.data = this.data.map((m, i) => {
      const value = e?.target?.value?.trim();
      const previous = this.data[i != 0 ? i - 1 : 0];
      const equal = m.value == value;
      if (m.status) {
        const status = equal ? 'text-success' : (new RegExp(/(default|success)/g).test(m.status) ? 'text-success' : 'text-danger');
        return { ...m, active: false, status: status };
      } if (previous.status) {
        return { ...m, active: true, status: 'label-default' };
      } else {
        return m;
      }
    });

    // success/wrong words count
    this.successWords=0;
    this.wrongWords=0;
    for(let word of this.data){
      if(word.status=="text-success")
        this.successWords++;
      else if(word.status=="text-danger")
        this.wrongWords++;
      else
        break;
    }
    
    // audio play
    for (const [i, item] of this.data.entries()) {
      const value = e?.target?.value?.trim();
      const previous = this.data[i != 0 ? i - 1 : 0];
      const equal = previous?.value === value;
      if (item.active) {
        this.playAudioJS(`https://id1945.github.io/typing/assets/${equal ? 'success' : 'wrong'}.mp3`, 1);
      }
    }

    // Clean
    e.target.value = '';

    // complte check
    if(this.successWords+this.wrongWords==this.totalWords){

      clearInterval(this.timeInterval);
      var minutes = Math.floor(this.seconds / 60000);
      var seconds = parseInt( ((this.seconds % 60000) / 1000).toFixed(0) );
      minutes += seconds/60;
      this.WPM = Math.round(this.totalWords/minutes);
      this.accuracy = (this.successWords/this.totalWords)*100;
      this.accuracy = Math.round(this.accuracy);
      this.isCompleted = true;

      // USER firest time - document creation
      if(!this.typingScoreDoc || !Object.keys(this.typingScoreDoc)?.length){
        this.typingScoreDoc={
          uid: this._userService.getCurrentUserId(),
          scores: [
            {
              allAttempts:[this.WPM],
              id: this.typingId,
              maxWPM: this.WPM
            }
          ]
        }
      }
      // else if(score.maxWPM<this.WPM && this.accuracy<=80){
      //   this.isMaxWPMbutLowAccuracy = true;
      // }
      else if(this.accuracy>=80){
        let isExist = this.typingScoreDoc.scores.find(item => item.id == this.typingId);

        if(isExist){
          // When typing lession already exist
          this.typingScoreDoc.scores = this.typingScoreDoc.scores.map((score:any)=>{
            if(score.id == this.typingId){
              score.allAttempts.push(this.WPM);
              if(score.maxWPM<this.WPM){
                score.maxWPM=this.WPM
              }
            }
            return score;
          })
        }
        else{
          // When typing lession DOESNOT exist
          this.typingScoreDoc.scores.push(
            {
              allAttempts:[this.WPM],
              id:this.typingId,
              maxWPM: this.WPM
            }
          )
        }
      }

      this._typingService.addScore(this._userService.getCurrentUserId(),this.typingScoreDoc)

    }

  }
  
  typingStarted(){
    this.timeInterval = setInterval(()=>{
      this.seconds += 1000;
      this.time = this.millisToMinutesAndSeconds(this.seconds);
    },1000)
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = parseInt( ((millis % 60000) / 1000).toFixed(0) );
    return seconds == 60 ?
    (minutes+1) + ":00" :
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  }

  /**
   * onInput
   * label-default
   * label-danger
   */
  onInput(e: any) {
    if (!e.Space) {
      this.data = this.data.map((m, i) => {
        const value = e?.target?.value?.trim();
        const equal = m?.value === value;
        if (m.active) {
          return { ...m, status: equal ? 'label-default' : 'label-danger' };
        } else {
          return m;
        }
      });
    }
  }

  /**
   * shuffleArray
   * @param array 
   * @returns 
   */
  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * trackByFn
   * @param index 
   * @param item 
   * @returns 
   */
  trackByFn(index: Number, item: any) {
    return item.id; // unique id corresponding to the item
  }

  /**
   * @param {*} path: audio
   * @param {*} volume: number
   */
  playAudioJS(path: string, volume: number) {
    const audio = new Audio();
    audio.currentTime = 0;
    audio.autoplay = true;
    audio.src = path;
    audio.volume = volume;
    audio.load();
    audio.play().catch((error) => {
      console.log('Exception play audio: issue', error);
    });
  }

  /**
   * Loading text When user select typing lession
   * @param id 
   */
  loadText(id){
    this.typingId = id;
    this.reset();
    this._typingService.getText(id).subscribe(
      (res:any)=>{    
        let data:any = res.payload.data();
        this.text = data.text;
        this.initData();
      }
    )
  }

  reset(){
    this.isCompleted = false;
    this.isMaxWPMbutLowAccuracy = false;
    this.seconds=0;
    clearInterval(this.timeInterval);
    this.WPM = 0;
    this.accuracy = 0;
    this.successWords = 0;
    this.wrongWords = 0;
    this.initData();
  }

}
