import { Component, OnInit ,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit 
{

  chart=[];
    show=true;

  constructor(public dataService: DataService,private elementRef: ElementRef) { }

  ngOnInit(): void 
  {
    

    if(this.dataService.name2==null)
    {
      this.show=false;
    }

   
  }

  ngAfterViewInit() 
  {
    if(this.dataService.type=="line")
    {
    
    let htmlRef = this.elementRef.nativeElement.querySelector(`#yourCavasId`);;
    this.chart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: this.dataService.date,
        datasets: [
          { 
            label: this.dataService.name1,
            data: this.dataService.price1,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            label: this.dataService.name2,
            data: this.dataService.price2,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          position: 'top'
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            ticks: {
                autoSkip: true,
                maxTicksLimit: 20
            }
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
  else
  {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#yourCavasId`);;
    this.chart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: this.dataService.date,
        datasets: [
          { 
            label: this.dataService.name1,
            data: this.dataService.price1,
            backgroundColor :"purple",
            fill: false
          },
          { 
            label: this.dataService.name2,
            data: this.dataService.price2,
            backgroundColor :"green",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          position: 'top'
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            ticks: {
                autoSkip: true,
                maxTicksLimit: 20
            }
          }],
          yAxes: [{
            display: true
            
          }],
        }
      }
    });
  }

}
}
