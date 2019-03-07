import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isAdded:boolean;
  confirmString:String="Product has been added successfully";
  constructor(private http:Http) { }
  productObj:object={}
  addNewProduct=function(product){
   this.productObj={
        "title":product.title,
        "author":product.author
   }
this.http.post("http://localhost:3000/posts/",this.productObj).subscribe(
  (res:Response)=>{
    console.log(""+res);
    this.isAdded=true;
  }
)
  }

  ngOnInit() {
  }

}
