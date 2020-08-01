import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  public login(username)
  {
    return this.http.get("http://localhost:8761/api/stock_user-service/getUserByUsername/"+username);
  }

  public addUser(user)
  {
    return this.http.post("http://localhost:8761/api/stock_user-service/addStockUser",user);
  }
}
