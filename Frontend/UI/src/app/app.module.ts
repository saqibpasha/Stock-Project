import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { UploadComponent } from './admin/upload/upload.component';
import { DetailsComponent } from './user/details/details.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { IpoListComponent } from './admin/ipo-list/ipo-list.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { ListStockExchangeComponent } from './admin/list-stock-exchange/list-stock-exchange.component';
import { AboutComponent } from './common/about/about.component';
import { HomeComponent } from './admin/home/home.component';
import { IpoComponent } from './admin/ipo/ipo.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { ListEditIpoComponent } from './admin/list-edit-ipo/list-edit-ipo.component';
import { ListUpdateComponent } from './admin/list-update/list-update.component';
import { ChartComponent } from './user/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    AddStockExchangeComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    UserComponent,
    CompareDetailsComponent,
    CompareChartsComponent,
    UploadComponent,
    DetailsComponent,
    UpdateIpoComponent,
    ManageIpoComponent,
    ListCompanyComponent,
    UpdateDetailsComponent,
    IpoListComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    ListStockExchangeComponent,
    AboutComponent,
    HomeComponent,
    IpoComponent,
    AddIpoComponent,
    ListEditIpoComponent,
    ListUpdateComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
