import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-update',
  templateUrl: './list-update.component.html',
  styleUrls: ['./list-update.component.css']
})
export class ListUpdateComponent implements OnInit 
{
  companies:any;

  constructor(private service: CompanyService, private router: Router) { }

  ngOnInit()
  {
    this.service.listCompany().subscribe((data)=>this.companies=data);
  }

  public deleteCompany(id)
  {
    this.service.deleteCompany(id).subscribe((data)=>this.companies=data);
  }

}
