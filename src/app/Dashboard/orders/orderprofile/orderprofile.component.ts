import { Component, OnInit } from '@angular/core';
import { OrdersComponent } from '../orders.component';
import { GetrequestedeorderService } from 'src/app/servicef/getrequestedeorder.service';

@Component({
  selector: 'app-orderprofile',
  templateUrl: './orderprofile.component.html',
  styleUrls: ['./orderprofile.component.css']
})
export class OrderprofileComponent implements OnInit {
  orderprofiledata : any[] = new Array();
  
  constructor(private orderservice:GetrequestedeorderService) {
    
   }

  ngOnInit() {
      this.getprofiledata();
  }

  getprofiledata(){
      this.orderprofiledata = this.orderservice.getselectedprofiledata();
      console.log(this.orderprofiledata);
  }

}
