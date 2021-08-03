import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayotComponent } from './shared/admin-layot/admin-layot.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';



@NgModule({
  declarations: [
    AdminLayotComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {
          path: '', component: AdminLayotComponent, children: [
            { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegistrationPageComponent },
          ]
        }
      ]),
  ]
})
export class AdminModule { }
