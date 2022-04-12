import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Observable, ReplaySubject } from 'rxjs';
import { ScriptService } from 'src/app/admin/layout/script.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Patient Data' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};
  document: any

  constructor(private router: Router, private script: ScriptService) {
    this.script.load('coremin', 'appmin', 'app').then(data => {
      // console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.loadStyle('assets/css/hospital.min.css')
  }

  signout() {
    this.router.navigate(['']);
  }

  ngAfterViewInit() {

  }

  private loadStyle(url: string): Observable<any> {
    if (this._loadedLibraries[url]) {
      return this._loadedLibraries[url].asObservable();
    }

    this._loadedLibraries[url] = new ReplaySubject();

    const style = document.createElement('link');
    style.type = 'text/css';
    style.href = url;
    style.rel = 'stylesheet';
    style.onload = () => {
      this._loadedLibraries[url].next();
      this._loadedLibraries[url].complete();
    };

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    return this._loadedLibraries[url].asObservable();
  }

}
