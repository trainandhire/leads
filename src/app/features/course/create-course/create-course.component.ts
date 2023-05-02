import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  

  public isAddNewCourse:boolean = false;
  public isAddNewModule:boolean = false;
  public isAddNewChapter:boolean = false;
  public isAddNewPage:boolean = false;
  
  public courseName:string = "";
  public moduleName:string = "";
  public chapterName:string = "";
  public pageName:string = "";

  public selectedCourseIndex:number = -1;
  public selectedModuleIndex:number = -1;
  public selectedChapterIndex:number = -1;
  public selectedPageIndex:number = -1;


  // ----------------- COURSE FUNCTIONS ---------------

  selectedCourse(courseIndex:any){
    this.selectedCourseIndex = courseIndex;  
  }

  openAddNewCourseForm(){
    this.isAddNewCourse = true;
  }

  addNewCourse(){
    this.courses.push(
      {
        name:this.courseName,
        modules:[

        ]
      }
    );

    this.closeAddNewCourse()
  }

  closeAddNewCourse(){
    this.courseName = "";
    this.isAddNewCourse = false;
  }

  // ----------------- MODULE FUNCTION ---------------
  
  selectedModule(moduleIndex:any){
    this.selectedModuleIndex =moduleIndex;  
  }

  openAddNewModuleForm(){
    this.isAddNewModule = true;
  }

  addNewModule(){
    this.courses[this.selectedCourseIndex].modules.push(
      {
        name:this.moduleName,
        chapters:[

        ]
      }
    );
    console.log(this.courses);

    this.closeAddNewModule()
  }

  closeAddNewModule(){
    this.moduleName = "";
    this.isAddNewModule = false;
  }

  // ----------------- CHAPTER FUNCTION ---------------
  
  selectedChapter(chapterIndex:any){
    this.selectedChapterIndex = chapterIndex;  
  }

  openAddNewChapterForm(){
    this.isAddNewChapter = true;
  }

  addNewChapter(){
    this.courses[this.selectedCourseIndex].modules[this.selectedModuleIndex].chapters.push(
      {
        name:this.chapterName,
        pages:[

        ]
      }
    );

    this.closeAddNewChapter();
  }

  closeAddNewChapter(){
    this.chapterName = "";
    this.isAddNewChapter = false;
  }

  // ----------------- PAGE FUNCTION ---------------
  
  selectedPage(pageIndex:any){
    this.selectedPageIndex = pageIndex;  
  }

  openAddNewPageForm(){
    this.isAddNewPage = true;
  }

  addNewPage(){
    this.courses[this.selectedCourseIndex].modules[this.selectedModuleIndex].chapters[this.selectedChapterIndex].pages.push(
      {
        name:this.pageName
      }
    );

    this.closeAddNewPage();
  }

  closeAddNewPage(){
    this.pageName = "";
    this.isAddNewPage = false;
  }



  public courses:any = 
  [
    {
      name: "Angular",
      modules:[
        {
          name: "Forms",
          chapters:[
            {
              name:"Form Group",
              pages:[ "id1", "id2"]
            },
            {
              name:"Form Array",
              pages:[ "id1", "id2"]
            },
          ]
        },
        {
          name: "Rxjs",
          chapters:[
            {
              name:"Observables",
              pages:[ "id1", "id2"]
            },
            {
              name:"Subjects",
              pages:[ "id1", "id2"]
            },
          ]
        }
      ]
    },
    {
      name: "HTML",
      modules:[
        {
          name: "basic",
          chapters:[
            {
              name:"formatting tags",
              pages:[ 
                {
                  name:'page 11'
                },
                {
                  name:'page 21'
                }
              ]
            },
            {
              name:"iframes",
              pages:[ 
                {
                  name:'page 12'
                },
                {
                  name:'page 22'
                }
              ]
            },
          ]
        },
        {
          name: "advanced",
          chapters:[
            {
              name:"tables",
              pages:[ 
                {
                  name:'page 13'
                },
                {
                  name:'page 23'
                }
              ]
            },
            {
              name:"html apis",
              pages:[ 
                {
                  name:'page 14'
                },
                {
                  name:'page 24'
                }
              ]
            },
          ]
        }
      ]
    }
  ];

  // ===================  Drag and Drop Functionality =========================

  drop(event: CdkDragDrop<{}[]>) {
    console.log('****', event, event.previousContainer, event.container);
    if (event.previousContainer == event.container) {
      console.log(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('in else');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
