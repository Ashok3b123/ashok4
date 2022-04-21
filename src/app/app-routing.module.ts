import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompanyComponent } from './about-us/aboutcompany/aboutcompany.component';
import { AccontsComponent } from './acconts/acconts.component';
import { AppsComponent } from './apps/apps.component';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './child/child.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEmployeeComponent } from './createemployee/createemployee.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { ProductsummaryComponent } from './productsummary/productsummary.component';
import { SiblingoneComponent } from './siblingone/siblingone.component';
import { SiblingtwoComponent } from './siblingtwo/siblingtwo.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"eventbinding",component:EventbindingComponent},
    {path:"apps",component:AppsComponent},
    {path:"vehiclesummary",component:VehiclesummaryComponent},
    {path:"acconts",component:AccontsComponent},
    {path:"products",component:ProductsComponent},
    {path:"interpolation",component:InterpolationComponent},
    {path:"createvehicle",component:CreatevehicleComponent},
    {path:"editdetails/:id",component:CreatevehicleComponent},
    {path:"createaccount",component:CreateAccountComponent},
    {path:"createemployee",component:CreateEmployeeComponent},
    {path:"employee",component:EmployeeComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
    {path:'employeedetails/:id',component:EmployeedetailsComponent},
    {path:'aboutcompany',component:AboutcompanyComponent},
    {path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'siblingone',component:SiblingoneComponent},
    {path:'siblingtwo',component:SiblingtwoComponent},
    {path:'productsummary',component:ProductsummaryComponent},
    {path:"payment",component:PaymentComponent},
   {path:'productdetail',component:ProductdetailComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
