import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DesignuploadService {
url = "http://www.wepack.in/getdesignlist.php";
durl1 = "";
  constructor(private http:HttpClient) { }
  getDesignlist():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
  deleteDesign(id:string){
    this.durl1 ="http://www.wepack.in/deletedesign.php/?id="+id;
    return this.http.post(this.durl1,id);
  }
  uploadDesign(formsdata:any){
    let urluplload:string = "http://www.wepack.in/uploaddesign.php";
    return this.http.post(urluplload,formsdata);
  }
}
