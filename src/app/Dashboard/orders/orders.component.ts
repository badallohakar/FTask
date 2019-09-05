import { Component, OnInit } from '@angular/core';
import { GetrequestedeorderService } from 'src/app/servicef/getrequestedeorder.service';
import { RequestedOrderDataInterface } from 'src/app/Interfacesf/RequestedOrderDataInterface';
import { HttpClient } from '@angular/common/http';
import { Interfacetocnfrmorder } from 'src/app/interfacetocnfrmorder';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public ordersdata: RequestedOrderDataInterface[];
  
  ordersData: any[] = new Array();
  ordersDatac: any[] = new Array();
  serialn :number = 0;
  cnfrmationsatusofcnfrm:any[] = new Array();
  cnfrmationsatusofdelete:any[] = new Array();
  // normal array of any type, after you can make it class perspective


  constructor(private orderservice: GetrequestedeorderService,private router:Router) { }

  ngOnInit() {
    this.getorderdataf();
    //this.showDataInWeb();
  }

  getmeserial(){
    this.serialn+=1;
  }

  getorderdataf() {
    this.orderservice.getDataofOrders().subscribe((response: any) => {
      //response = response[1];
      this.ordersData.push(response);
     // console.log(this.ordersData);
    });
  }

  sendtoConform(id:string){
    this.orderservice.updateordertoconform(id).subscribe((res:any) =>{
   //  res = res.data;
       this.cnfrmationsatusofcnfrm.push(res);
       // console.log(this.cnfrmationsatusofcnfrm[0].sts);

        if(this.cnfrmationsatusofcnfrm[0].sts == "done"){
          this.serialn=0;
            this.ordersData.pop();
            this.getorderdataf()
        }else{
            alert("Failed To Delete");
        }

    } );
  }
  sendtoDelete(orderuid:string){
    this.orderservice.deletecurrentorder(orderuid).subscribe((res:any) =>{
      //  res = res.data;
          this.cnfrmationsatusofdelete.push(res);
           console.log(this.cnfrmationsatusofdelete[0].sts);
   
           if(this.cnfrmationsatusofdelete[0].sts == "done"){
             this.serialn=0;
               this.ordersData.pop();
               this.getorderdataf()
           }else{
               alert("Failed To Delete");
           }
   
       } );
  }

  sendtoGetFetails(id:any){
    this.ordersDatac = this.ordersData[0];
      this.orderservice.selectedidforgetprofile(this.ordersDatac[id-1]);
     // console.log(this.ordersDatac[id-1]);
      this.router.navigate(['sidebar/orderprofile']);
  }

  // showDataInWeb(){
  //   this.http.get('https://reqres.in/api/users/2').subscribe( (response : any) => {
  //     console.log('Data From Backend Service');
  //     console.log(response);
  //   });
  //   this.http.get('./../assets/data/data.json').subscribe( (response : any) => {
  //     console.log('Data From Local JSON Service');
  //     console.log(response);
  //   })
  // }

}
