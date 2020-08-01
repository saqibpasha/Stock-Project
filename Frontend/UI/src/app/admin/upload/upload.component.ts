import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { UploadService } from 'src/app/service/upload.service';
import { StockPrice } from '../../../models/stock_price';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit 
{
  showMsg : boolean=false;
  show : boolean =true;
  show2 : boolean =false;

  data: [][];
  stockPrices : StockPrice[]=[];

  companyName:any;
  stockExchange: any;
  count: any;
  start: any;
  end: any;

  constructor(public datepipe: DatePipe,private service: UploadService) { }

  ngOnInit() 
  {
  }

  onFileChange(evt: any) {const target : DataTransfer =  <DataTransfer>(evt.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      
      

    };

    reader.readAsBinaryString(target.files[0]);

  }

  public uploadStockPrice()
  { 

    


    
    let i=0;
    if((this.data[0].length>6 || this.data[0].length<6) && (!(this.data[0][i++]=="Company Code" && this.data[0][i++]=="Stock Exchange" && this.data[0][i++]=="Price Per Share(in Rs)" && this.data[0][i++]=="Date " && this.data[0][i++]=="Time")))
    {
      this.showMsg=true;
      console.log(this.data);
    }
    else
    {
      let a=0;
      let b=1
      let c=3
      let x = this.data.slice(1);
      this.count=x.length;
      this.companyName=x[0][a];
      this.stockExchange=x[0][b];
      this.start=x[0][c];
      this.end=x[x.length-1][c];

      for(i = 0; i < x.length; i++) 
      {
        let j=0;
        this.stockPrices[i]=new StockPrice(x[i][j++],x[i][j++],x[i][j++],x[i][j++],x[i][j++]);
        
        let resp=this.service.addStockPrice(this.stockPrices[i]);
        resp.subscribe();
    }
    this.show=false;
    this.show2=true;
  }
    
    
    
    
    
  /*  
    
  let x = this.data.slice(1);
      for(var i = 0; i < x.length; i++) 
      {
        let j=0;
        this.users[i]=new User(x[i][j++],x[i][j++],x[i][j++],x[i][j++],x[i][j++],x[i][j++],x[i][j++],x[i][j++],x[i][j++],x[i][j++]);
        this.users[i].name=;
        this.users[i].about=x[i][j++];
        this.users[i].bod=x[i][j++];
        this.users[i].ceo=x[i][j++];
        this.users[i].city=x[i][j++];
        this.users[i].sector=x[i][j++];
        this.users[i].state=x[i][j++];
        this.users[i].stock_exchange=x[i][j++];
        this.users[i].turnover=x[i][j++];
        this.users[i].zip=x[i][j++];

        let resp=this.service.addCompany(this.users[i]);
        resp.subscribe();

      }
      */
  }

  public addMoreFile()
  {
    this.show=true;
    this.show2=false;
  }

}
