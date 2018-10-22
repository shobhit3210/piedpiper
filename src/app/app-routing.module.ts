import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent, children: [
        { path: 'dashboard', component: UserDashboardComponent}
    ]
    },
    { path: 'register', component: RegisterComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
