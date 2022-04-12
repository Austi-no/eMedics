import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css'],
})
export class PatientSidebarComponent implements OnInit {
  user = JSON.parse(sessionStorage.getItem('loggedInUser'));
  userName: any;
  constructor() {}

  ngOnInit(): void {
    console.log('user = ', this.user);
    this.userName = this.user.userName;
  }
}
