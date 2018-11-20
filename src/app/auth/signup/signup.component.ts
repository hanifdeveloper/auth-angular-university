import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
      confirm: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  signUp() {
    const val = this.form.value;
    if (val) {
      this.authService.signUp(val.email, val.password, val.username)
        .subscribe(
          () => console.log('User created  succesfully '),
          console.error
        );
    }
  }

}
