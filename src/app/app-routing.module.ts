import { PatientGuard } from './auth/helpers/patient.guard';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingComponent } from './admin/layout/admin-landing/admin-landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RecoverAccountComponent } from './auth/recover-account/recover-account.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingComponent } from './layout/landing/landing.component';
import { AuthGuard } from './auth/helpers/auth.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { PatientHomeComponent } from './patient/layout/patient-home/patient-home.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'account-recovery', component: RecoverAccountComponent },

  {
    path: 'admin', component: HomeComponent,
    children: [
      { path: 'app', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
    ],

  },

  {
    path: 'patient', component: PatientHomeComponent,
    children: [
      { path: 'app', loadChildren: () => import('../app/patient/patient.module').then(m => m.PatientModule), canActivate: [PatientGuard] },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
