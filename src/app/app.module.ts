import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginscreenComponent } from './login/loginscreen/loginscreen.component';
import { OrdersComponent } from './Dashboard/orders/orders.component';
import { RegistrationComponent } from './Dashboard/registration/registration.component';
import { PendingorderComponent } from './Dashboard/pendingorder/pendingorder.component';
import { CompletedOrderComponent } from './Dashboard/completed-order/completed-order.component';
import { TotalEmployeeComponent } from './Dashboard/total-employee/total-employee.component';
import { SidebarMenuComponent } from './Dashboard/sidebar-menu/sidebar-menu.component';
import {GetrequestedeorderService} from './servicef/getrequestedeorder.service';
import {FormsModule} from '@angular/forms';
import { OrderprofileComponent } from './Dashboard/orders/orderprofile/orderprofile.component';
import { RegistrationlistComponent } from './Dashboard/registrationlist/registrationlist.component';
import { UpdateptstatusComponent } from './updateptstatus/updateptstatus.component';
import { RatedashboardComponent } from './Dashboard/ratedashboard/ratedashboard.component';
import {AuthGuard} from './auth.guard';
import { DesignsComponent } from './designs/designs.component';
import { DesignlistComponent } from './design/designlist/designlist.component';
import { DesignuploadComponent } from './design/designupload/designupload.component';
const appRoutes:Routes=[
  {path:'login',component:LoginscreenComponent},
  {path:'sidebar',canActivate:[AuthGuard],component:SidebarMenuComponent,children:[
    {path:'register',component:RegistrationComponent},
    {path:'orders',component:OrdersComponent},
    {path:'pendingorders',component:PendingorderComponent},
    {path:'completedorders',component:CompletedOrderComponent},
    {path:'employeelist',component:RegistrationlistComponent},
    {path:'orderprofile',component:OrderprofileComponent},
    {path:'updatepstatus',component:UpdateptstatusComponent},
    {path:'ratedashboard',component:RatedashboardComponent},
    {path:'design',component:DesignsComponent,children:[
      {path:'designlist',component:DesignlistComponent},
      {path:'designupload',component:DesignuploadComponent},
      {path:'',component:DesignuploadComponent}
    ]},
    {path:'',component:RegistrationComponent}
  ]},
  
  {path:'',redirectTo:'/login',pathMatch:'full'}
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    OrdersComponent,
    RegistrationComponent,
    PendingorderComponent,
    CompletedOrderComponent,
    TotalEmployeeComponent,
    SidebarMenuComponent,
    OrderprofileComponent,
    RegistrationlistComponent,
    UpdateptstatusComponent,
    RatedashboardComponent,
    DesignsComponent,
    DesignlistComponent,
    DesignuploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [GetrequestedeorderService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
