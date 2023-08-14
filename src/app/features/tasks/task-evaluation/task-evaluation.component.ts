import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TaskEvaluationService } from 'src/app/_api/task/task-evaluation.service';

@Component({
  selector: 'app-task-evaluation',
  templateUrl: './task-evaluation.component.html',
  styleUrls: ['./task-evaluation.component.css']
})

export class TaskEvaluationComponent {

  public marksSection: any = [
    { section: 'total task completion', marks: 10 },
    { section: 'view', marks: 10 },
    { section: 'logic', marks: 10 },
    { section: 'naming', marks: 10 },
    { section: 'clean code', marks: 10 }
  ];

  public basicArray: any = ['/assets/images/carousel/02.jpg',
    '/assets/images/carousel/03.jpg',
    '/assets/images/carousel/01.jpg'
  ];

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

  public tasks: any = [];

  constructor(private _taskEvaluation: TaskEvaluationService, private modelService: NgbModal) {
    this.getTasks()
  }

  getTasks() {
    this._taskEvaluation.getTaskEvaluation().subscribe(
      (data: any) => {
        this.tasks = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }

  taskModel(taskModelContent) {
    this.modelService.open(taskModelContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }
}
