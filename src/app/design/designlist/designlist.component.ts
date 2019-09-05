import { Component, OnInit } from '@angular/core';
import { DesignuploadService } from '../designupload.service';

@Component({
  selector: 'app-designlist',
  templateUrl: './designlist.component.html',
  styleUrls: ['./designlist.component.css']
})
export class DesignlistComponent implements OnInit {

  constructor(private designser:DesignuploadService) { }
  dataofdesignlist:any[] = new Array();
  deleteres:any[] = new Array();
  ngOnInit() {
    this.getListofdesign();
  }

getListofdesign(){
  this.dataofdesignlist.pop();
  this.designser.getDesignlist().subscribe((res : any)=>{
    this.dataofdesignlist.push(res["list"]);
    console.log(res);
  });
}

sendtoDelete(id:string){
  this.designser.deleteDesign(id).subscribe((res : any)=>{
    this.deleteres.push(res);
    console.log(this.deleteres[0]);
    if(this.deleteres[0].sts == "done"){
      alert("Deleted");
      this.dataofdesignlist.pop();
      this.getListofdesign();
    }else{
      alert("Delete to Failed");

    }
  });
}

}
