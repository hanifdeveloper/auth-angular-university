import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  }
]
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
