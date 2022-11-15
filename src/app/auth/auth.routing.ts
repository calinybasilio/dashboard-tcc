import { Routes } from '@angular/router';
import { LoginGuard } from 'app/shared/guards/login.guard';

import { LoginComponent } from './login/login.component';

export const AuthRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard]}
];
