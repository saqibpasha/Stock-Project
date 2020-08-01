import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StockService } from 'src/app/service/stock.service';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from '../../../models/company';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit 
{
  stock_exchanges:any;
  company: Company=new Company("","","","","","","","");
  showMsg=false;

  constructor(private _location: Location,private stockService: StockService,private service: CompanyService,private router :ActivatedRoute) { }

  ngOnInit() 
  {
    this.service.getCompanyById(this.router.snapshot.params.id).subscribe((data)=>
    {
      console.log(data['sector']);
      this.company.companyName=data['companyName'];
      this.company.boardOfDirector=data['boardOfDirector'];
      this.company.briefWriteup=data['briefWriteup'];
      this.company.ceo=data['ceo'];
      this.company.companyCode=data['companyCode'];
      this.company.sector=data['sector'];
      this.company.stockExchange=data['stockExchange'];
      this.company.turnover=data['turnover'];
      
      this.company.id=this.router.snapshot.params.id;
    });

    
    this.stockService.listStock_Exchange().subscribe((data)=>this.stock_exchanges=data);
  }

  backClicked() {
    this._location.back();
  }

  public editCompany()
  {
    this.service.addCompany(this.company).subscribe();
    this.showMsg=true;
  }

}
