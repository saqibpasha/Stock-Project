import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StockService } from 'src/app/service/stock.service';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from '../../../models/company';


@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit 
{
  company: Company=new Company("","","","","","","","");
  stock_exchanges:any;
  showMsg : boolean=false;

  constructor(private _location: Location,private stockService: StockService,private service: CompanyService) { }

  ngOnInit() 
  {
    let resp=this.stockService.listStock_Exchange();
    resp.subscribe((data)=>this.stock_exchanges=data);
  }

  backClicked() {
    this._location.back();
  }

  public onSubmit()
  {
    this.service.addCompany(this.company).subscribe(data =>
      { this.showMsg= true; });
    this.company=new Company("","","","","","","","");
  }
}
