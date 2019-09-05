import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, identity } from 'rxjs';
@Injectable({
  providedIn: 'root'
}) 
export class GetrequestedeorderService {

constructor(private http:HttpClient){}

profiledata:any=new Array();
url = "http://www.wepack.in/getallcurrentorderdata.php";
url1 = "http://www.wepack.in/getallpendingderdata.php";
url2 = "http://www.wepack.in/getallcompletderdata.php";
posturl :string;
posturl1 :string;
uptocnfrml :string;
getDataofOrders():Observable<any[]>{
  return this.http.get<any[]>(this.url);
}

updateordertoconform(id:string){
  this.posturl = "http://www.wepack.in/ordertoconfirm.php/?id="+id;
 // console.log(id);
  return this.http.post(this.posturl,id);
}
updateordertocomplete(id:string){
  this.uptocnfrml  = "http://www.wepack.in/ordertocomplete.php/?id="+id;
 // console.log(id);
  return this.http.post(this.uptocnfrml,id); 
}


selectedidforgetprofile(gprofiledata:any){
this.profiledata = gprofiledata;
}
deletecurrentorder(orderid:string){
  this.posturl1 = "http://www.wepack.in/deletecurrentorder.php/?id="+orderid;
  // console.log(id);
   return this.http.post(this.posturl1,orderid);
}
getselectedprofiledata(){
  return this.profiledata;
}

getPendingOrders():Observable<any[]>{
  return this.http.get<any[]>(this.url1);
}

getCompletedOrders():Observable<any[]>{
  return this.http.get<any[]>(this.url2);
}

}
