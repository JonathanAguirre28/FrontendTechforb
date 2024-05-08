import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo: 'login',
    pathMatch: 'full'
   },
   {
     path: 'login',
     component: LoginComponent
   },
   {
     path: 'register',
     component: RegisterComponent
   },
   {
     path:'dashboard',
     component:SidenavComponent,
     children: [{
       path:'',
       component: DashboardComponent
     }]
   },
   {
     path: '**',
     component: LoginComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
