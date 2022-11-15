import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErroInputModule } from 'app/shared/erro-input/erro-input.module';

import { AuthRoutes } from './auth.routing';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule,
    ErroInputModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }