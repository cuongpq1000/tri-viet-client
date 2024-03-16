import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  totalStudents: number = 0;
  upcomingClasses: number = 0;

  constructor() {}

  ngOnInit() {
    this.totalStudents = this.getTotalStudents();
    this.upcomingClasses = this.getUpcomingClasses();
    console.log(this.totalStudents);
  }

  getTotalStudents(): number {
    return 100;
  }

  getUpcomingClasses(): number {
    return 10;
  }
}
