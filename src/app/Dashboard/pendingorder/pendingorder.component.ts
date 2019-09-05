import { Component, OnInit } from '@angular/core';
import { GetrequestedeorderService } from 'src/app/servicef/getrequestedeorder.service';

@Component({
  selector: 'app-pendingorder',
  templateUrl: './pendingorder.component.html',
  styleUrls: ['./pendingorder.component.css']
})
export class PendingorderComponent implements OnInit {
  ordersPData: any[] = new Array();
  cnfrmationsatusofcmplete:any[]= new Array();
  serialn :number = 0;
  constructor(private orderservice: GetrequestedeorderService) { }
  getmeserial(){
    this.serialn+=1; 
  }
  ngOnInit() {
    this.getpendingorder();
  }
  getpendingorder(): any {
    this.orderservice.getPendingOrders().subscribe((response: any) => {
      //response = response[1];
      this.ordersPData.push(response);
     // console.log(this.ordersData);
    });
  }
  sendtoComplete(qid:string,val:string){
    if(val.trim().length === 0){
      alert("Please Enter Valid Bill No.");
      
     }else{
    this.orderservice.updateordertocomplete(qid).subscribe((res:any) =>{
      //  res = res.data;
          this.cnfrmationsatusofcmplete.push(res);
           console.log(this.cnfrmationsatusofcmplete[0].sts);
   
           if(this.cnfrmationsatusofcmplete[0].sts == "done"){
             this.serialn=0;
               this.ordersPData.pop();
               this.getpendingorder();
           }else{
               alert("Failed To Purform Operation");
           }
   
       } );
      }
  }

}
