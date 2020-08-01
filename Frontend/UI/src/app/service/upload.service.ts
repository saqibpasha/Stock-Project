import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient) { }

  public addStockPrice(stockPrice)
  {
    return this.http.post("http://localhost:8761/api/stock_price-service/addStockPrice",stockPrice);
  }

  public getStockPrice(companyCode,from,to)
  {
    return this.http.get("http://localhost:8761/api/stock_price-service/getStockPrice/"+companyCode+"/"+from+"/"+to).map(result => result);
  }
}
