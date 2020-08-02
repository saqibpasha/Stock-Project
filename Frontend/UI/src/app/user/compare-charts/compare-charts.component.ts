import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { UploadService } from 'src/app/service/upload.service';
import { DataService } from 'src/app/service/data.service';
import { Form } from '../../../models/form';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'compare-charts',
  templateUrl: './compare-charts.component.html',
  styleUrls: ['./compare-charts.component.css']
})
export class CompareChartsComponent implements OnInit 
{

  isActive=false;
  incomplete=false;

  stockPrices1:any;
  stockPrices2:any;
  resPrices1:any;
  resPrices2:any;
  price1:any;
  price2:any;
  date: any;

  sectors: any

  
  form: Form=new Form("",new Date(),new Date(),"");
  code1:any;
  code2:any;

  constructor(private router : Router,public datepipe: DatePipe,private companyService: CompanyService,private stockService: UploadService,private dataService: DataService) { }

  ngOnInit() 
  {
    this.companyService.getSector().subscribe((data)=>{this.sectors=data;
    
    }
    );
    
  }

  public onSubmit()
  {
    this.dataService.name1=this.form.first;
    this.dataService.name2=this.form.second;
    this.dataService.type=this.form.type;
    this.dataService.price1=[];
    this.dataService.price2=[];

    this.companyService.getCompanyBySector(this.form.first).subscribe((data)=>
    {
      let count=0;
      
      
      for(var value in data)
      {
        
        
        
          if(count==0)
          {
         
           this.code1=data[value]['companyCode'];
           this.stockService.getStockPrice(this.code1,this.datepipe.transform(this.form.from, 'yyyy-MM-dd'),this.datepipe.transform(this.form.to, 'yyyy-MM-dd'))
            .subscribe((data)=>{
            this.stockPrices1=data;

            
        
            this.dataService.price1 = this.stockPrices1.map(res => res.price);

            this.dataService.date=this.stockPrices1.map(res => res.date);

            for(var i=0; i<this.dataService.price1.length;i++)
      {
                this.dataService.price1[i]=this.dataService.price1[i]/count;
      }
      this.dataService.max1=Math.max(...this.dataService.price1);
        this.dataService.min1=Math.min(...this.dataService.price1);

        var total=0;
      for(var i = 0; i < this.dataService.price1.length; i++) 
      {
      total += this.dataService.price1[i]*1;
      }
      this.dataService.avg1 = total / this.dataService.price1.length;
          
                });
          count++;
          }
          else
          {

            this.code1=data[value]['companyCode'];
            this.stockService.getStockPrice(this.code1,this.datepipe.transform(this.form.from, 'yyyy-MM-dd'),this.datepipe.transform(this.form.to, 'yyyy-MM-dd'))
            .subscribe((data)=>{
            this.stockPrices1=data;

            
              this.resPrices1=this.stockPrices1.map(res => res.price);

              for(var i=0; i<this.resPrices1.length;i++)
              {
                
                this.dataService.price1[i]=(this.dataService.price1[i]*1)+(this.resPrices1[i]*1);
              }

              for(var i=0; i<this.dataService.price1.length;i++)
      {
                this.dataService.price1[i]=this.dataService.price1[i]/count;
      }
      this.dataService.max1=Math.max(...this.dataService.price1);
        this.dataService.min1=Math.min(...this.dataService.price1);

        var total=0;
      for(var i = 0; i < this.dataService.price1.length; i++) 
      {
      total += this.dataService.price1[i]*1;
      }
      this.dataService.avg1 = total / this.dataService.price1.length;
              
              

              
              
              
              

          });

          count++;
          

          
          
        
          }
        
        
      }
      

      
     
      
    }
    );







    this.companyService.getCompanyBySector(this.form.second).subscribe((data)=>
    {
      let count=0;
      for(var value in data)
      {
        
        
        
          if(count==0)
          {
         
           this.code2=data[value]['companyCode'];
           this.stockService.getStockPrice(this.code2,this.datepipe.transform(this.form.from, 'yyyy-MM-dd'),this.datepipe.transform(this.form.to, 'yyyy-MM-dd'))
            .subscribe((data)=>{
            this.stockPrices2=data;
        
            this.dataService.price2 = this.stockPrices2.map(res => res.price);

            for(var i=0; i<this.dataService.price2.length;i++)
      {
                this.dataService.price2[i]=this.dataService.price2[i]/count;
      }
      this.dataService.max2=Math.max(...this.dataService.price2);
        this.dataService.min2=Math.min(...this.dataService.price2);

        var total=0;
      for(var i = 0; i < this.dataService.price2.length; i++) 
      {
      total += this.dataService.price2[i]*1;
      }
      this.dataService.avg2 = total / this.dataService.price2.length;
          
                });
          count++;
          }
          else
          {

            this.code2=data[value]['companyCode'];
            this.stockService.getStockPrice(this.code2,this.datepipe.transform(this.form.from, 'yyyy-MM-dd'),this.datepipe.transform(this.form.to, 'yyyy-MM-dd'))
            .subscribe((data)=>{
            this.stockPrices2=data;


              this.resPrices2=this.stockPrices2.map(res => res.price);

              for(var i=0; i<this.resPrices2.length;i++)
              {
                this.dataService.price2[i]=(this.dataService.price2[i]*1)+(this.resPrices2[i]*1);
              }

              for(var i=0; i<this.dataService.price2.length;i++)
      {
                this.dataService.price2[i]=this.dataService.price2[i]/count;
      }
      this.dataService.max2=Math.max(...this.dataService.price2);
        this.dataService.min2=Math.min(...this.dataService.price2);

        var total=0;
      for(var i = 0; i < this.dataService.price2.length; i++) 
      {
      total += this.dataService.price2[i]*1;
      }
      this.dataService.avg2 = total / this.dataService.price2.length;

              
              
              
              

          });
          
          count++;
          

          
          
        
        }
      }

      for(var i=0; i<this.dataService.price2.length;i++)
      {
                this.dataService.price2[i]=this.dataService.price2[i]/count;
      }

     
      this.dataService.max2=Math.max(...this.dataService.price2);
        this.dataService.min2=Math.min(...this.dataService.price2);

        var total=0;
      for(var i = 0; i < this.dataService.price2.length; i++) 
      {
      total += this.dataService.price2[i]*1;
      }
      this.dataService.avg2 = total / this.dataService.price2.length;

      
     
    }
    );



    
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
      this.router.navigate(['/user/chart']);
    }

  }

}
