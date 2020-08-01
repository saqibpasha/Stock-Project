import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

  public addStock_Exchange(stock_exchange)
  {
    return this.http.post("http://localhost:8761/api/stock_exchange-service/addStock_Exchange",stock_exchange);
  }

  public listStock_Exchange()
  {
    return this.http.get("http://localhost:8761/api/stock_exchange-service/listStock_Exchange");
  }
}
