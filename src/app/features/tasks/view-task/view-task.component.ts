import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { id } from '@swimlane/ngx-datatable';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MailTestService } from 'src/app/_api/mail-test/mail-test.service';
import { TaskEvaluationService } from 'src/app/_api/task/task-evaluation.service';
import { UserService } from 'src/app/_api/user/user.service';
import { AlertService } from 'src/app/_services/alert.service';

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

  public uploadFileForm: FormGroup = new FormGroup({
    fileArray: new FormArray([])
  })

  get fileArray() {
    return this.uploadFileForm.get('fileArray') as FormArray;
  }

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

  public menu: any = [];

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public task: any;
  public id: any = '';

  constructor(private _mailTestService: MailTestService, private _task: TaskEvaluationService, private _userService: UserService, private _alertsServices: AlertService, private _activatedRoute: ActivatedRoute) {

    this._mailTestService.getMailTestMenu().subscribe(
      (data: any) => {
        this.menu = data;
      }
    )

    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
      }
    )
    this.getTask();
  }


  getTask() {
    this._task.getTask(this.id).subscribe(
      (data: any) => {
        this.task = data;
      },
      (err: any) => {
        this._alertsServices.error("server error")
      }
    )
  }

  addFile() {
    this.fileArray.push(
      new FormGroup({
        file: new FormControl()
      })
    )
  }

  removeFile(i: number) {
    this.fileArray.removeAt(i);
  }

  emptyFileArray() {
    for (let i = this.fileArray.length; i >= 0; i--) {
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


  ngOnInit() {


  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
