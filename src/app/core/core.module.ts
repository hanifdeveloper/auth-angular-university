import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
