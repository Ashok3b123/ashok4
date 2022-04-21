import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { AppsComponent } from './apps/apps.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';
import { AccontsComponent } from './acconts/acconts.component';
import { ProductsComponent } from './products/products.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './createemployee/createemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RupeePipe } from './rupee.pipe';
import { CurrencyPipe } from './currency.pipe';
import { AboutUsModule } from './about-us/about-us.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingoneComponent } from './siblingone/siblingone.component';
import { SiblingtwoComponent } from './siblingtwo/siblingtwo.component';
import { ProductsummaryComponent } from './productsummary/productsummary.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InterpolationComponent,
    EventbindingComponent,
    AppsComponent,
    VehiclesummaryComponent,
    AccontsComponent,
    ProductsComponent,
    CreatevehicleComponent,
    CreateAccountComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeedetailsComponent,
    RupeePipe,
    CurrencyPipe,
    ParentComponent,
    ChildComponent,
    SiblingoneComponent,
    SiblingtwoComponent,
    ProductsummaryComponent,
    ProductdetailComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
