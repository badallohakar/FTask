import { Component, OnInit } from '@angular/core';
import { EmployeelistService } from 'src/app/sevicef/employeelist.service';

@Component({
  selector: 'app-ratedashboard',
  templateUrl: './ratedashboard.component.html',
  styleUrls: ['./ratedashboard.component.css']
})
export class RatedashboardComponent implements OnInit {
statusdata:any[] = new Array();
ratelist:any[] = new Array();
  constructor(private employeeservice:EmployeelistService) { }

  ngOnInit() {
    this.getRatelistsa();
  }
  getRatelistsa(){
    this.employeeservice.getListOfRates().subscribe((response: any) => {
      this.ratelist = response["rated"];
      console.log(this.ratelist);
    });
  }
  updatediscount(alphas:string,values:number){
    alert("Click Ok To Proceed");
    this.employeeservice.updatedratechart1(alphas,values).subscribe((response: any) => {
      //response = response[1];
      this.statusdata.push(response);
      console.log(this.statusdata[0].sts);
      alert("Updated..");
    });
    
  }
  updatecurrentfiled(alphas:string,position:number,values:number){
    alert("Click Ok To Proceed");
    this.employeeservice.updatedratechart(alphas,position,values).subscribe((response: any) => {
      //response = response[1];
      this.statusdata.push(response);
      console.log(this.statusdata[0].sts);
      alert("Updated..");
    });
  }
}
