import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit 
{
  company:any;
  companyName: string="";
  show: boolean=false;
  constructor(private service: CompanyService) { }

  ngOnInit() 
  {
    
  }
  public onSubmit()
  {
    this.service.getCompanyByName(this.companyName).subscribe((data)=>
    {
    this.company=data;
    this.show=true;
    }
    );
  }

}
