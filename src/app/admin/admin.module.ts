import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminFooterComponent } from './layout/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { AdminLandingComponent } from './layout/admin-landing/admin-landing.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/admin-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { ToastrModule } from 'ngx-toastr';
import { AdminHomeComponent } from './layout/admin-home/admin-home.component';


@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxShimmerLoadingModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
  ]
})
export class AdminModule { }
