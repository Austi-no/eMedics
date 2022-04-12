import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientHomeComponent } from './layout/patient-home/patient-home.component';
import { PatientLandingComponent } from './layout/patient-landing/patient-landing.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: PatientLandingComponent },
  { path: 'profile', component: PatientComponent }

  // {
  //   path: "", component: PatientHomeComponent,
  //   children: [
  //     { path: 'dashboard', component: PatientLandingComponent }
  //   ]
  // },
  // { path: "dashboard", component: PatientComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
