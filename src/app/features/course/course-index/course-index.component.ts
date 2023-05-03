import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-index',
  templateUrl: './course-index.component.html',
  styleUrls: ['./course-index.component.css']
})
export class CourseIndexComponent {

  @Input() course:any = null;

}
