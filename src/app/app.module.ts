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
import { AppRoutingModule } from './app-routing.module';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
