import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module'; 
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {
          path: '', component: AdminLayoutComponent, children: [
            { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegistrationPageComponent },
            { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
            { path: 'users', component: UserPageComponent, canActivate: [AuthGuard] },
          ]
        }
      ]),
  ]
})
export class AdminModule { }
