import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit 
{
  ipos : any;

  constructor(private service: IpoService) { }

  ngOnInit() 
  {
    let resp=this.service.listIpo();
    resp.subscribe((data)=>this.ipos=data);
  }

}
