import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  providers:[MyserviceService],
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  constructor(private myservice:MyserviceService,private routes:Router) { }

  ngOnInit() {
  }

check(uid:string,pass:string){
  this.myservice.uid = uid;
  this.myservice.pass = pass;

  var output = this.myservice.checkuserandpassword(uid,pass);
  if(output == true){
    //console.log(output);
    localStorage.setItem("uid",uid);
    localStorage.setItem("pass",pass);
this.routes.navigate(['/sidebar']);
  }else{
    alert("Wrong Id And Password");
    
  }
}

}
