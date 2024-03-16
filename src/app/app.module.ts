import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation/navigation.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CourseComponent } from "./course/course.component";
import { EnrollmentComponent } from "./enrollment/enrollment.component";
import { PaymentComponent } from "./payment/payment.component";
import { StudentComponent } from "./student/student.component";
import { TestResultComponent } from "./test-result/test-result.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { AppRoutingModule } from "./app-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CourseComponent,
    EnrollmentComponent,
    PaymentComponent,
    StudentComponent,
    TestResultComponent,
    NavigationComponent,
    AttendanceComponent,
    ThemeToggleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    MatIconModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FontAwesomeModule,
  ],
})
export class AppModule {}
