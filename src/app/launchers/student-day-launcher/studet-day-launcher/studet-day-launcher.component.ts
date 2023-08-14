import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studet-day-launcher',
  templateUrl: './studet-day-launcher.component.html',
  styleUrls: ['./studet-day-launcher.component.css']
})
export class StudetDayLauncherComponent implements OnInit {

  public currentRoute:string = "";

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
      title: "typing",
      routerLink: 'typing'
    },
    {
      title: "email",
      routerLink: 'mail-test/create-mail'
    },
    {
      title: "text",
      routerLink: "text"
    },
    {
      title:"mail-evaluation",
      routerLink: "mail-test/mail-evaluation"
    },
    {
      title:"task-evaluation",
      routerLink: "tasks/task-evaluation"
    }
  ];

  constructor(private router:Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.currentRoute = this.router.url.split('/').pop();
    });
  }

}