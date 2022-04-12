import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { PasswordMatchValidator } from '../helpers/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean;
  success: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        registerAs: ['', Validators.required],
      },
      { validator: PasswordMatchValidator('password', 'confirmPassword') }
    );
  }

  get f() {
    return this.signupForm.controls;
  }

  createAccount() {
    this.submitted = true;
    console.log(this.signupForm.value);
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      this.submitted = false;
      this.toastr.error('', 'Invalid Fields');

      return;
    }


    this.service.createAccount(this.signupForm.value).subscribe(
      (res) => {
        this.submitted = false;
        console.log(res);
        if (res.statusCode == '200') {
          this.success = true
          this.toastr.success('success ', res.message);
          this.signupForm.reset()
        } else {
          this.toastr.error(' Failed ', res.message);
        }
      },
      (error) => {
        this.submitted = false;
        this.toastr.error(' error ', error.error);
        console.log(error);
      }
    );
  }
}
