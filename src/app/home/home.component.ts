import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  id:number;
  private hearders=new Headers({'Content-Type':'application/json'});

   products=[];
  constructor(private http:Http) { }
  fetchData=function(){
    this.http.get("http://localhost:3000/posts/").subscribe(
      (res:Response)=>{
        this.products=res.json();
      }
    )
  }

  deleteProduct=function(id){
    if(confirm("Are you sure?")){
  return this.http.delete("http://localhost:3000/posts/"+id,{headers: this.hearders}).toPromise().then(()=>
{
  this.fetchData();
})
  }
  }
  ngOnInit() {
    this.fetchData();
  }

}
