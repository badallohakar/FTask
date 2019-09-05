import { Component, OnInit } from '@angular/core';
import { EmployeelistService } from 'src/app/sevicef/employeelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationlist',
  templateUrl: './registrationlist.component.html',
  styleUrls: ['./registrationlist.component.css']
})
export class RegistrationlistComponent implements OnInit {

  dataemployeelist: any[] = new Array();
  deleteresponse : any[]=new Array();
  flag=true;
  result = "hello";
  constructor(private employlistservice:EmployeelistService,private router:Router) { }

  ngOnInit() {
   this.getemployeelistc();
  }
  sendtoDelete(uidq:String){
      this.employlistservice.deleteCurentID(uidq).subscribe((res:any)=>{
        this.deleteresponse.push(res);

      if(this.deleteresponse[0].flag == 0){
        console.log("done");
        this.flag = false;
        this.result = "Deleted";
      }else{
        console.log("not done");
        this.flag = false;
        this.result = "Failed To Delete";
      }

      this.dataemployeelist.pop();
      this.getemployeelistc();
     
    });
  }
  getemployeelistc(){
    this.flag = true;
      this.employlistservice.getEmployeelist().subscribe((res : any)=>{
        this.dataemployeelist.push(res);
        console.log(res);
      });
  }
}
