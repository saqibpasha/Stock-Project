import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-edit-ipo',
  templateUrl: './list-edit-ipo.component.html',
  styleUrls: ['./list-edit-ipo.component.css']
})
export class ListEditIpoComponent implements OnInit 
{
  ipos :any;

  constructor(private service: IpoService, private router: Router) { }

  ngOnInit()
  {
    let resp=this.service.listIpo();
    resp.subscribe((data)=>this.ipos=data);
  }

}
