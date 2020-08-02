import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { UploadService } from 'src/app/service/upload.service';
import { DataService } from 'src/app/service/data.service';
import { Form } from '../../../models/form';
import { DatePipe } from '@angular/common';
import { Chart } from 'node_modules/chart.js';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';



@Component({
  selector: 'compare-details',
  templateUrl: './compare-details.component.html',
  styleUrls: ['./compare-details.component.css']
})
export class CompareDetailsComponent implements OnInit 
{ 
  chart=[];

  isActive=false;
  incomplete=false;

  stockPrices1:any;
  stockPrices2:any;
  price1:any;
  price2:any;
  date: any;

  companies :any;
  form: Form=new Form("",new Date(),new Date(),"");
  code1:any;
  code2:any;

  constructor(private router : Router,public datepipe: DatePipe,private companyService: CompanyService,private stockService: UploadService,private dataService: DataService) { }

  ngOnInit() 
  {
    let resp=this.companyService.listCompany().subscribe((data)=>this.companies=data);
  }

  public onSubmit()
  {
    
    this.dataService.name1=this.form.first;
    this.dataService.name2=this.form.second;
    this.dataService.type=this.form.type;

    this.companyService.getCompanyByName(this.form.first).subscribe((data)=>{this.code1=data['companyCode'];
    this.stockService.getStockPrice(this.code1,this.datepipe.transform
      (this.form.from, 'yyyy-MM-dd'),this.datepipe.transform(this.form.to, 'yyyy-MM-dd'))
      .subscribe((data)=>{this.stockPrices1=data;
        
        this.dataService.price1 = this.stockPrices1.map(res => res.price);
        

        this.dataService.date=this.stockPrices1.map(res => res.date);

        this.dataService.max1=Math.max(...this.dataService.price1);
        this.dataService.min1=Math.min(...this.dataService.price1);

       var total=0;
      for(var i = 0; i < this.dataService.price1.length; i++) 
      {
      total += this.dataService.price1[i]*1;
      }
      this.dataService.avg1 = total / this.dataService.price1.length;


       


      });

      
  });
    this.companyService.getCompanyByName(this.form.second).subscribe((data)=>{this.code2=data['companyCode'];
    this.stockService.getStockPrice(this.code2,this.datepipe.transform
      (this.form.from, 'yyyy-MM-dd'),this.datepipe.transform(this.form.to, 'yyyy-MM-dd'))
      .subscribe((data)=>{this.stockPrices2=data;

        this.dataService.price2 = this.stockPrices2.map(res => res.price);

        this.dataService.max2=Math.max(...this.dataService.price2);
        this.dataService.min2=Math.min(...this.dataService.price2);

        var total=0;
      for(var i = 0; i < this.dataService.price2.length; i++) 
      {
      total += this.dataService.price2[i]*1;
      }
      this.dataService.avg2 = total / this.dataService.price2.length;

        


      });

      
  });

  


    

    

   this.isActive=true;   
      
  


  }

  public onGenerate()
  {
    if(this.stockPrices1==null)
    {
      this.incomplete=true;
    }
    else if(this.stockPrices2==null)
    {
      this.incomplete=true;
    }
    else
    {
      //console.log(this.dataService.price1);
      this.router.navigate(['/user/chart']);
    }
    
    

    
    
  }

}
