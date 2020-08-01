import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService} from 'src/app/service/user.service';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit 
{
  usernameMsg: boolean= false;
  successMsg: boolean= false;

  user : User=new User("","");

  constructor(private service : UserService) { }

  ngOnInit() 
  {

  }

  public onSubmit()
  {
    
    let resp=this.service.login(this.user.username);
    resp.subscribe(data =>{
      
      if(data!=null)
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
