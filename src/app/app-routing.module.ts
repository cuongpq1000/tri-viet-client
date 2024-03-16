import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AttendanceComponent } from "./attendance/attendance.component";
import { CourseComponent } from "./course/course.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EnrollmentComponent } from "./enrollment/enrollment.component";
import { PaymentComponent } from "./payment/payment.component";
import { StudentComponent } from "./student/student.component";
import { TestResultComponent } from "./test-result/test-result.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "student", component: StudentComponent },
  { path: "course", component: CourseComponent },
  { path: "enrollment", component: EnrollmentComponent },
  { path: "attendance", component: AttendanceComponent },
  { path: "payment", component: PaymentComponent },
  { path: "test-result", component: TestResultComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
