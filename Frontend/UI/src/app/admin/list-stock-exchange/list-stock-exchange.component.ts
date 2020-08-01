import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-list-stock-exchange',
  templateUrl: './list-stock-exchange.component.html',
  styleUrls: ['./list-stock-exchange.component.css']
})
export class ListStockExchangeComponent implements OnInit 
{
  stock_exchanges:any;
  constructor(private service: StockService) { }

  ngOnInit()
  {
    let resp=this.service.listStock_Exchange();
    resp.subscribe((data)=>this.stock_exchanges=data);
  }

}
