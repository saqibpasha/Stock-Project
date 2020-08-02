import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http : HttpClient) { }

  public addCompany(company)
  {
    return this.http.post("http://localhost:8761/api/stock_company-service/addNewCompany",company);
  }

  public listCompany()
  {
    return this.http.get("http://localhost:8761/api/stock_company-service/listCompany");
  }

  public deleteCompany(id)
  {
    return this.http.delete("http://localhost:8761/api/stock_company-service/deleteCompany/"+id);
  }

  public getCompanyByCode(code)
  {
    return this.http.get("http://localhost:8761/api/stock_company-service/getCompanyByCode/"+code);
  }

  public getCompanyBySector(sector)
  {
    return this.http.get("http://localhost:8761/api/stock_company-service/getCompanyBySector/"+sector);
  }

  public getCompanyByName(companyName)
  {
    return this.http.get("http://localhost:8761/api/stock_company-service/getCompanyByName/"+companyName);
  }

  public getCompanyById(id)
  {
    return this.http.get("http://localhost:8761/api/stock_company-service/getCompanyById/"+id);
  }

  public getSector()
  {
    return this.http.get("http://localhost:8761/api/stock_company-service/getSector");
  }

  public listStockExchange()
  {
    return this.http.get("http://localhost:8761/api/stock_company-service/listStockExchange");
  }

}
