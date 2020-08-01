import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { IpoService } from 'src/app/service/ipo.service';
import { Ipo } from 'src/models/ipo';

@Component({
  selector: 'update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit 

{
  ipo : Ipo =new Ipo("","","","","",0,0);
  showMsg : boolean=false;
  constructor(private _location: Location, private router :ActivatedRoute,private service : IpoService) { }

  ngOnInit() 
  {
    this.service.getIpoById(this.router.snapshot.params.id).subscribe((data)=>{
      
      this.ipo.name=data['name'];
      this.ipo.sector=data['sector'];
      this.ipo.stockExchange=data['stockExchange'];
      this.ipo.remarks=data['remarks'];
      this.ipo.date=data['date'];
      this.ipo.sharePrice=data['sharePrice'];
      this.ipo.totalShares=data['totalShares'];
      this.ipo.id=this.router.snapshot.params.id;
      
  })

}

backClicked() {
  this._location.back();
}

public editIpo()
{
  this.service.updateIpo(this.router.snapshot.params.id,this.ipo).subscribe();
  this.showMsg= true;
}



}

