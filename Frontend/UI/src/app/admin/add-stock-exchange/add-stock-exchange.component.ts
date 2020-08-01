import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Stock_Exchange } from '../../../models/Stock_exchange';
import { StockService} from 'src/app/service/stock.service';

@Component({
  selector: 'add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit 
{
  showMsg : boolean=false;

  stock_exchange : Stock_Exchange=new Stock_Exchange("","","","");

  constructor(private _location: Location, private service : StockService) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  public addStock_Exchange()
  {
    let resp=this.service.addStock_Exchange(this.stock_exchange);
    resp.subscribe(data =>{ this.showMsg= true; });
    this.stock_exchange=new Stock_Exchange("","","","");
  }

}
