import { Component, OnInit } from '@angular/core';
declare const uploadImage: any;
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    uploadImage()
  }

}
