import { AuthService } from './../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../helpers/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  submitted: boolean;
  constructor(private router: Router, private authService: AuthService, private sessionService: SessionService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    sessionStorage.clear()
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      this.toastr.error("Invalid Details")
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(res => {

      if (res.isAuthenticated == true && res.statusCode === "200") {
        console.log(res);
        this.submitted = false;
        this.sessionService.setToken(res.token)
        this.sessionService.setUser(res.userDetail)
        this.sessionService.setUserRole(res.userDetail.roles);
        this.toastr.success("Login Successful")
        // this.router.navigate(['home']);
        this.navigateToDashboard();
      }
    }, error => {
      this.submitted = false;
      this.toastr.error("Error!", error.error.message)
    })



  }
  navigateToDashboard() {
    var role = this.sessionService.getUserRole();
    // console.log(role[0].name);


    switch (role[0].name) {
      case 'Patient':
        this.router.navigate(['/patient/app/dashboard']);
        break;

      case 'Admin':
        this.router.navigate(['/admin/app/dashboard']);
        break;

      default:
        console.log('No role for selected account');

    }


  }

}
