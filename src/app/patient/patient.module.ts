import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { ToastrModule } from 'ngx-toastr';
import { PatientFooterComponent } from './layout/patient-footer/patient-footer.component';
import { PatientHeaderComponent } from './layout/patient-header/patient-header.component';
import { PatientLandingComponent } from './layout/patient-landing/patient-landing.component';
import { PatientSidebarComponent } from './layout/patient-sidebar/patient-sidebar.component';
import { PatientComponent } from './patient/patient.component';
import { PatientHomeComponent } from './layout/patient-home/patient-home.component';


@NgModule({
  declarations: [
    PatientLandingComponent,
    PatientFooterComponent,
    PatientHeaderComponent,
    PatientSidebarComponent,
    PatientComponent,
    PatientHomeComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxShimmerLoadingModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
  ]
})
export class PatientModule { }
