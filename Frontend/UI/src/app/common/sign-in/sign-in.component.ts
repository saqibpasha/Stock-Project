import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import { UserService} from 'src/app/service/user.service';
import { DataService} from 'src/app/service/data.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit 
{
  adminName:any="Saqib";
  adminPassword:any="Saqib";

showMsg: boolean= false;
showMsgAdmin: boolean= false;

  user : User=new User("","");

  constructor(private router : Router,private service : UserService,private dataService : DataService) { }

  ngOnInit() {
  }

  public onSubmit()
  {
    let resp=this.service.login(this.user.username);
    resp.subscribe(data =>{
      
      if(data==null)
      {
        this.showMsg= true; 
      }
      else if(this.user.password==data['password'])
      {
        this.dataService.username=this.user.username;
        this.router.navigate(['/user']);

      }
      else
      {
      this.showMsg= true; 
    }
  }
      );
    }

    public onSubmitAdmin()
    {
      if((this.adminName=="Saqib") && (this.adminPassword=="Saqib"))
      {
        this.router.navigate(['/admin']);
      }
      else
      {
        this.showMsgAdmin= true;
      }
    }


    
    
  }
 


