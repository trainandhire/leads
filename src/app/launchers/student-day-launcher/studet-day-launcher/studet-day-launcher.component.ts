import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studet-day-launcher',
  templateUrl: './studet-day-launcher.component.html',
  styleUrls: ['./studet-day-launcher.component.css']
})
export class StudetDayLauncherComponent implements OnInit {

  public currentRoute:string = "";
  public currentRouteAndParentRoute:string = "";

  public dayPlannerTabs:any = [
    {
      title: "content",
      routerLink: 'course'
    },
    {
      title: "tasks",
      routerLink: 'tasks'
    },
    {
      title:"task evaluation",
      routerLink: "tasks/task-evaluation"
    },
    {
      title: "typing",
      routerLink: 'typing'
    },
    {
      title: "typing trainer summery",
      routerLink: "typing/typing-trainer-summery"
    },
    {
      title: "email",
      routerLink: 'mail-test/create-mail'
    },
    {
      title:"mail evaluation",
      routerLink: "mail-test/mail-evaluation"
    },
    {
      title: "text",
      routerLink: "text"
    },
    {
      title:"student registration",
      routerLink: "students/student-registration"
    },
    {
      title:"student details",
      routerLink : "students/student-details"
    },
    {
      title:"role management",
      routerLink : "users/role-management"
    }
  ];

  constructor(private router:Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.currentRoute = this.router.url.split('/').pop();
      let pathsArr = this.router.url.split('/');
      this.currentRouteAndParentRoute = pathsArr[pathsArr.length-2]+"/"+pathsArr[pathsArr.length-1];
    });
  }

}