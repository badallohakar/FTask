import { Component, OnInit,  NgModule} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisrationserviceService } from 'src/app/servicef/regisrationservice.service';
import { stringify } from 'querystring';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationrespons : any[]=new Array();
  flag=true;
  result = "hello";
  datob = new Date();
  uidq:string;
  constructor(private regservice:RegisrationserviceService) { }

  ngOnInit() {
   // console.log(this.uidq);
  }

  registerData(data:NgForm){
    this.uidq = "";
    this.uidq= new Date().getDay() +""+ (new Date().getMonth()+1) +""+new Date().getFullYear()+  new Date().getHours()+  new Date().getMinutes()+  new Date().getMilliseconds();
   
      this.regservice.registernewuser(data,this.uidq).subscribe((res:any)=>{
          this.registrationrespons.push(res);

        if(this.registrationrespons[0].flag == 0){
          console.log("done");
          this.flag = false;
          this.result = "Registration Done";
        }else{
          console.log("not done");
          this.flag = false;
          this.result = "Registration Failed";
        }

        
      });
  }

}
