import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { create } from 'domain';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TaskEvaluationService } from 'src/app/_api/task/task-evaluation.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public createTask: FormGroup = new FormGroup({
    header: new FormControl(),
    body: new FormControl(),
    fileArray: new FormArray([]),
    marks: new FormArray([])
  })

  get fileArray() {
    return this.createTask.get('fileArray') as FormArray;
  }

  get marksArray() {
    return this.createTask.get("marks") as FormArray;
  }
  constructor(private _taskService: TaskEvaluationService, private _alertService: AlertService) {
    this.addFile()
  }

  createTasks() {
    this._taskService.createTask(this.createTask.value).subscribe(
      (data: any) => {
        this._alertService.success("Task Created Succussfully")
      },
      (err: any) => {
        this._alertService.error("Task Not Created")
      }
    )
  }

  addMarks() {
    this.marksArray.push(
      new FormGroup({
        section: new FormControl(),
        marks: new FormControl()
      })
    )
  }

  addFile() {
    this.fileArray.push(
      new FormGroup({
        outputHeader: new FormControl(),
        outputBody: new FormControl(),
        file: new FormControl()
      })
    )
  }

  delete(i: number) {
    this.fileArray.removeAt(i)
  }

  deleteMarks(i: number) {
    this.marksArray.removeAt(i)

  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
