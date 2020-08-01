import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Ipo } from '../../../models/ipo';
import { IpoService} from 'src/app/service/ipo.service';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit 
{

  showMsg : boolean=false;

  ipo : Ipo=new Ipo("","","","","",0,0); 

  constructor(private _location: Location, private service : IpoService) { }

  ngOnInit(): void 
  {
  }

  backClicked() 
  {
    this._location.back();
  }

  public addIpo()
  {
    let resp=this.service.addIpo(this.ipo);
    resp.subscribe(data =>{ this.showMsg= true; });
    this.ipo=new Ipo("","","","","",0,0);
  }



}
