import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MailTestService } from 'src/app/_api/mail-test/mail-test.service';
import { UserService } from 'src/app/_api/user/user.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {

  public marksSection: any = [
    { section: 'total task completion', marks: 10 },
    { section: 'view', marks: 10 },
    { section: 'logic', marks: 10 },
    { section: 'naming', marks: 10 },
    { section: 'clean code', marks: 10 }
  ];

  public uploadFileForm:FormGroup = new FormGroup({
    fileArray: new FormArray([])
  })

  get fileArray(){
    return this.uploadFileForm.get('fileArray') as FormArray;
  }

  addFile(){
    this.fileArray.push(
      new FormGroup({
        file: new FormControl()
      })
    )
  }

  removeFile(i:number){
    this.fileArray.removeAt(i);
  }

  emptyFileArray(){
    for(let i=this.fileArray.length; i>=0; i--){
      this.fileArray.removeAt(i);
      this.fileArray.updateValueAndValidity();
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        // this.projectInfoForm.patchValue({
        //   file: reader.result
        // });
        // this.cd.markForCheck();
        console.log(reader.result);
      };
    }
  }

  image1 = [
    {
      img: '../../../../assets/images/gallery/1.jpg',
      thumb: '../../../../assets/images/gallery/1.jpg',
      description: 'Image 1'
    }]
  image2 = [{
    img: '../../../../assets/images/gallery/2.jpg',
    thumb: '../../../../assets/images/gallery/2.jpg',
    description: 'Image 2'
  }]
  image3 = [{
    img: '../../../../assets/images/gallery/3.jpg',
    thumb: '../../../../assets/images/gallery/3.jpg',
    description: 'Image 3'
  }]
  image4 = [{
    img: '../../../../assets/images/gallery/4.jpg',
    thumb: '../../../../assets/images/gallery/4.jpg',
    description: 'Image 4'
  }]
  image5 = [{
    img: '../../../../assets/images/gallery/5.jpg',
    thumb: '../../../../assets/images/gallery/5.jpg',
    description: 'Image 5'
  }
  ]
  image6 = [
    {
      img: '../../../../assets/images/gallery/6.jpg',
      thumb: '../../../../assets/images/gallery/6.jpg',
      description: 'Image 6'
    }
  ]
  image7 = [
    {
      img: '../../../../assets/images/gallery/7.jpg',
      thumb: '../../../../assets/images/gallery/7.jpg',
      description: 'Image 7'
    }
  ]
  image8 = [
    {
      img: '../../../../assets/images/gallery/8.jpg',
      thumb: '../../../../assets/images/gallery/8.jpg',
      description: 'Image 8'
    }
  ]
  image9 = [
    {
      img: '../../../../assets/images/gallery/9.jpg',
      thumb: '../../../../assets/images/gallery/9.jpg',
      description: 'Image 9'
    }
  ]
  image10 = [
    {
      img: '../../../../assets/images/gallery/10.jpg',
      thumb: '../../../../assets/images/gallery/10.jpg',
      description: 'Image 10'
    }
  ]
  image11 =
    [
      {
        img: '../../../../assets/images/gallery/11.jpg',
        thumb: '../../../../assets/images/gallery/11.jpg',
        description: 'Image 11'
      }
    ];
  image12 =
    [
      {
        img: '../../../../assets/images/gallery/12.jpg',
        thumb: '../../../../assets/images/gallery/12.jpg',
        description: 'Image 12'
      }
    ];

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

  public menu:any = [];

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  constructor(private _mailTestService: MailTestService, private _userService: UserService) {

    this._mailTestService.getMailTestMenu().subscribe(
      (data: any) => {
        this.menu = data;
      }
    );
  }

  ngOnInit() {


  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
