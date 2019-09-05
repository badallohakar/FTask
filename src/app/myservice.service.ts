import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
uid:string;
pass:string;
  constructor() { }
  checkuserandpassword(uid:string,pass:string){
    if(uid == "himanshu123" && pass == "himanshu123"){
      this.uid = uid;
      this.pass = pass;
      return true;
    }else{
      this.uid = null;
      this.pass = null;
       return false;
    }
    


  }
}
