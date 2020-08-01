import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { AboutComponent } from './common/about/about.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UploadComponent } from './admin/upload/upload.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { DetailsComponent } from './user/details/details.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { ListStockExchangeComponent } from './admin/list-stock-exchange/list-stock-exchange.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { HomeComponent } from './admin/home/home.component';
import { IpoComponent} from './admin/ipo/ipo.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { IpoListComponent } from './admin/ipo-list/ipo-list.component';
import { ListEditIpoComponent } from './admin/list-edit-ipo/list-edit-ipo.component';
import { ListUpdateComponent } from './admin/list-update/list-update.component';
import { ChartComponent } from './user/chart/chart.component'


const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'add-company', component: AddCompanyComponent },
      { path: 'update-company/:id', component: UpdateCompanyComponent },
      { path: 'add-stock-exchange', component: AddStockExchangeComponent },
      { path: 'list-company', component: ListCompanyComponent },
      { path: 'ipo', component: IpoComponent },
      { path: 'add-ipo', component: AddIpoComponent },
      { path: 'list-edit-ipo', component: ListEditIpoComponent },
      { path: 'list-ipo', component: IpoListComponent },
      { path: 'list-update', component: ListUpdateComponent },
      { path: 'update-ipo/:id', component: UpdateIpoComponent },
      { path: 'manage-company', component: ManageCompanyComponent },
      { path: 'manage-exchange', component: ManageExchangeComponent },
      { path: 'list-stock-exchange', component: ListStockExchangeComponent }
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', component: DetailsComponent },
      { path: 'details', component: DetailsComponent},
      { path: 'update-user', component: UpdateDetailsComponent},
      { path: 'chart', component: ChartComponent }, 
      { path: 'list-ipo', component: IpoListComponent},
      { path: 'compare-company', component: CompareDetailsComponent },
     { path: 'compare-sector', component: CompareChartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
