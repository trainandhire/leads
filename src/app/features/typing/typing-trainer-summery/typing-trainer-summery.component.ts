import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TypingService } from 'src/app/_api/typing/typing.service';

@Component({
  selector: 'app-typing-trainer-summery',
  templateUrl: './typing-trainer-summery.component.html',
  styleUrls: ['./typing-trainer-summery.component.css']
})
export class TypingTrainerSummeryComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public typingResults: any = [];

  public multipleMultiSelect: any = [];
  public multipleChapterMultiSelect: any = [];

  public multipleSelectArray: any;
  public multipleChapterSelectArray: any;

  public highScorers: any = []
  public lowScorers: any = []


  constructor(private _typingService: TypingService) {
    this.getTypingPrograss();
    this.multipleMultiSelect = [];
    this.multipleChapterMultiSelect = [];
    this.highScorers = [
      {
        "name": "suresh akkineni",
        "image": "../../../assets/images/portrait/small/avatar-s-3.png",
        "id": "s2564",
        "maxWpm": 30,
        "noOfAttempts": 2
      },
      {
        "name": "ramesh chintavarapu",
        "image": "../../../assets/images/portrait/small/avatar-s-6.png",
        "id": "s65987",
        "maxWpm": 55,
        "noOfAttempts": 5
      },
      {
        "name": "sai jegurupadu",
        "image": "../../../assets/images/portrait/small/avatar-s-13.png",
        "id": "s459215",
        "maxWpm": 36,
        "noOfAttempts": 15
      }
    ]
    this.lowScorers = [
      {
        "name": "sai",
        "image": "../../../assets/images/portrait/small/avatar-s-3.png",
        "id": "s459215",
        "maxWpm": 36,
        "noOfAttempts": 15
      },
      {
        "name": "rakesh",
        "image": "../../../assets/images/portrait/small/avatar-s-3.png",
        "id": "s459215",
        "maxWpm": 36,
        "noOfAttempts": 15
      },
      {
        "name": "hareesh",
        "image": "../../../assets/images/portrait/small/avatar-s-3.png",
        "id": "s459215",
        "maxWpm": 36,
        "noOfAttempts": 15
      }
    ]
    this.multipleSelectArray = [
      {
        "item_id": 1, "item_text": "S21"
      },
      {
        "item_id": 2, "item_text": "S22"
      },
      {
        "item_id": 3, "item_text": "S23"
      },
      {
        "item_id": 4, "item_text": "S24"
      },
      {
        "item_id": 5, "item_text": "S25"
      },
      {
        "item_id": 6, "item_text": "S26"
      },
      {
        "item_id": 7, "item_text": "S27"
      }
    ]
    this.multipleChapterSelectArray = [
      {
        "item_id": 1, "item_text": "ASDF JKL"
      },
      {
        "item_id": 2, "item_text": "ASDFG JKL"
      },
      {
        "item_id": 3, "item_text": " RTYU VBN"
      },
      {
        "item_id": 4, "item_text": "QWE IOP"
      },
      {
        "item_id": 5, "item_text": " ZXC NM"
      },
      {
        "item_id": 6, "item_text": "ALL LETTERS"
      }
    ]

  }

  getTypingPrograss() {
    this._typingService.getTypingTrainerSummery().subscribe(
      (data: any) => {
        this.typingResults = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

  createSore(){
    this._typingService.createSore().subscribe(
      (data:any) => {
        alert("posted successfullly")
      },
      (err:any)=>{
        alert("not posted")
      }
    )
  }
   

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');
    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
