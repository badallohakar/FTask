import { Component, OnInit, ElementRef } from '@angular/core';
import { DesignuploadService } from '../designupload.service';

@Component({
  selector: 'app-designupload',
  templateUrl: './designupload.component.html',
  styleUrls: ['./designupload.component.css'],
  providers:[DesignuploadService]
})
export class DesignuploadComponent implements OnInit {

  constructor(private uploadservice:DesignuploadService,private elem:ElementRef) { }
      datl:any[] = new Array();
  ngOnInit() {
  }
  public uploadimage():void{
      let files = this.elem.nativeElement.querySelector('#selectFile').files;
      let formdatas = new FormData();
      let file = files[0];
      alert("Click Ok And Wait For Result");
     // console.log(file);    
      formdatas.append('selectFile',file);
      this.uploadservice.uploadDesign(formdatas).subscribe((res:any)=>{
        this.datl.push(res);
        if(this.datl[0].sts == "uplode"){
            alert("New Design Have Uploded..");
        }
        else{
          alert("Failed To Upload");
        }
      });

  }



}
