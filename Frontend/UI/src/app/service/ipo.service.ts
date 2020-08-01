import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpoService 
{
  constructor(private http : HttpClient) { }

  public addIpo(ipo)
  {
    return this.http.post("http://localhost:8761/api/stock_ipo-service/addStock_Ipo",ipo);
  }

  public listIpo()
  {
    return this.http.get("http://localhost:8761/api/stock_ipo-service/listStock_Ipo");
  }

  public updateIpo(id,user)
  {
    return this.http.put("http://localhost:8761/api/stock_ipo-service/updateIpo/"+id,user);
  }

  public getIpoById(id)
  {
    return this.http.get("http://localhost:8761/api/stock_ipo-service/getIpoById/"+id);
  }
}
