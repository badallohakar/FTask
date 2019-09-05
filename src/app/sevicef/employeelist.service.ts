import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {
url ="http://www.wepack.in/getemployeelist.php";
durl :string;
durl1 :string;
  constructor(private http:HttpClient) { }
  getEmployeelist():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  deleteCurentID(id:String){
    this.durl ="http://www.wepack.in/deleteemployeeid.php/?id="+id;
    return this.http.post(this.durl,"data");
  }
  updatedratechart(alpha:string,position:number,value:number){
    this.durl1 ="http://www.wepack.in/updateratechart.php/?alpha="+alpha+"&position="+position+"&value="+value;
    return this.http.post(this.durl1,alpha);
  }
  updatedratechart1(alpha:string,value:number){
    this.durl1 ="http://www.wepack.in/updateratechart1.php/?alpha="+alpha+"&value="+value;
    return this.http.post(this.durl1,alpha);
  }
  getListOfRates():Observable<any[]>{
    let ur = "http://www.wepack.in/pregetratesdetails.php";
    return this.http.get<any[]>(ur);
  }

}
