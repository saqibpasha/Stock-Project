import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/service/data.service';
import { UserService} from 'src/app/service/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit 
{
  usernameMsg:boolean=false;
  successMsg: boolean=false;

  constructor(private service : UserService,private dataService: DataService) { }
  user : User=new User("","","","");

  ngOnInit()
  {
    this.service.login(this.dataService.username).subscribe(data =>
      { 
        this.user.username=data['username'];
        this.user.mobile=data['mobile'];
        this.user.email=data['email'];
        this.user.password=data['password'];
        this.user.id=data['id'];
    
  }
      );
    

  }
  
  public onSubmit()
  {
      
    
    this.service.login(this.user.username).subscribe(data =>{
      
      if(data!=null && this.user.id!=data['id'])
      {
        this.usernameMsg= true; 
      }
      else
      {
        this.service.addUser(this.user).subscribe(data2 =>
          { this.successMsg= true;
            this.usernameMsg= false;
           });

      }
    }
      )
  }

}
