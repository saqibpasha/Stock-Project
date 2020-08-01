import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/service/data.service';
import { UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit 
{

  constructor(private service : UserService,private dataService: DataService) { }
  username: string;
  mobile: string;
  email:string;


  ngOnInit()
  {
    
    let resp=this.service.login(this.dataService.username);
    resp.subscribe(data =>
      { 
        this.username=data['username'];
        this.mobile=data['mobile'];
        this.email=data['email'];

      
      
  }
      );

  }

}
