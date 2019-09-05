import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class RegisrationserviceService {

  constructor(private http:HttpClient) { }
  posturl :string;

  registernewuser(data:NgForm,uqid:String){
    this.posturl = "http://www.wepack.in/registermember.php/?name="+data.value.name+"&email="+data.value.email
    +"&number="+data.value.number+"&address="+data.value.adress+"&uid="+data.value.uid+"&pass="+data.value.password+"&uqid="+uqid;
    console.log();
    return this.http.post(this.posturl,"data");
  }


}
