import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchcustComponent } from './searchcust/searchcust.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",redirectTo:"home","pathMatch":"full"},
  {path:"home",component: HomeComponent},
  {path:"register",component: RegisterEmployeeComponent},
  {path: "getCustomers",component: SearchcustComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
