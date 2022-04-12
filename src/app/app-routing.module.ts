import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccontsComponent } from './acconts/acconts.component';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"eventbinding",component:EventbindingComponent},
    {path:"apps",component:AppComponent},
    {path:"vehiclesummary",component:VehiclesummaryComponent},
    {path:"acconts",component:AccontsComponent},
    {path:"products",component:ProductsComponent},
    {path:"interpolation",component:InterpolationComponent},
    {path:"createvehicle",component:CreatevehicleComponent},
    {path:"createaccount",component:CreateAccountComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
