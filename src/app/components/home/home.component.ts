import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummery } from 'src/app/models/global-data';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed=0;
  totalActive=0;
  totalDeaths=0;
  totalRecovered=0;
  globalData:GlobalDataSummery[];
  constructor(private dataService :DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData()
   .subscribe(

    {
     next : (result)=>{
        console.log(result);
        this.globalData=result;
        result.forEach(cs=>{
          if(!Number.isNaN(cs.confirmed))
          {
          this.totalActive+=cs.active
          this.totalConfirmed+=cs.confirmed
          this.totalDeaths+=cs.death
          this.totalRecovered+=cs.recovered
          }
        })
      }
    }
   )
    
  }

}
