import { Component, OnInit } from '@angular/core';
import { UppstsserviceService } from './uppstsservice.service';

@Component({
  selector: 'app-updateptstatus',
  templateUrl: './updateptstatus.component.html',
  styleUrls: ['./updateptstatus.component.css']
})
export class UpdateptstatusComponent implements OnInit {
  chflag = true;
flag:number;
  constructor(private updtpymntstats:UppstsserviceService) { }
  dataCOrders:any[] = new Array();
  serialn :number = 0;
  getmeserial(){
    this.serialn+=1;
  }
  ngOnInit() {
    this.getcompletorderlist();
    
  }
  getcompletorderlist(){
    this.updtpymntstats.getcompletedorders().subscribe((response: any) => {
      //response = response[1];
      this.dataCOrders.push(response);
     // console.log(this.ordersData);
    });
  }
  isPaid(flag:number){
    
    if(flag == 3){
      this.chflag = true;
        return this.chflag;
    }else{
      this.chflag = false;
        return this.chflag;
    }
}

  updatepaymentstatus(eve,id:string){
    console.log(id); 
    
    if ( eve.target.checked ) {
      this.flag = 3;
 
     
      this.updtpymntstats.updatepaymentstatus(this.flag,id).subscribe((data:any)=>{
        this.dataCOrders.pop();
        this.getcompletorderlist();
      });
     
    }else{
      this.flag = 2;
      this.updtpymntstats.updatepaymentstatus(this.flag,id).subscribe((data:any)=>{
        this.dataCOrders.pop();
        this.getcompletorderlist();
      });
    }
  }

}
