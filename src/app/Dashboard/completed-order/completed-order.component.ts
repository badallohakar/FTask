import { Component, OnInit } from '@angular/core';
import { GetrequestedeorderService } from 'src/app/servicef/getrequestedeorder.service';

@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.component.html',
  styleUrls: ['./completed-order.component.css']
})
export class CompletedOrderComponent implements OnInit {

  constructor(private orderservice: GetrequestedeorderService) { }
  ordersCData: any[] = new Array();
  serialn:number = 0;
  ngOnInit() {
    this.getCompletedOrderList();
  }
  getmeserial(){
    this.serialn+=1;
  }

  isValid(flag:number){
      if(flag == 2){
          return false;
      }else{
          return true;
      }
  }

  getCompletedOrderList(): any {
    this.orderservice.getCompletedOrders().subscribe((response: any) => {
      //response = response[1];
      this.ordersCData.push(response);
      
    });
  }

}
