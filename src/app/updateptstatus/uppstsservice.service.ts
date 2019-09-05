import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UppstsserviceService {
  constructor(private http:HttpClient) { }
  url="";
  url1="";
  
  updatepaymentstatus(flag:number,id:string):Observable<any[]>{
    this.url ="http://www.wepack.in/updatepaymentstatus.php/?pyntid="+id+"&flag="+flag;
    return this.http.get<any[]>(this.url);
  }

  getcompletedorders():Observable<any[]>{
    this.url ="http://www.wepack.in/getallcompletderdata.php";
    return this.http.get<any[]>(this.url);
  }


}
 