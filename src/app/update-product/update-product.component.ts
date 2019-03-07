import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'
import {ActivatedRoute,} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data={};
  products=[];
  productObj={};
  constructor(private router:Router,private activateRoute:ActivatedRoute,private http:Http) { }

  private hearders=new Headers({'Content-Type':'application/json'});

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{
      this.id=+params['id'];

    })
    this.http.get("http://localhost:3000/posts/").subscribe(
      (res:Response)=>{
        this.products=res.json();
        console.log(this.products.length);
        for(var i=0;i<this.products.length;i++){
          console.log(this.products[i].id+" "+this.id);
          if(parseInt(this.products[i].id)===this.id){
            this.data=this.products[i];
          }
        }
      }
    )
  }

  updateProduct(product){
    this.productObj={
      "title":product.title,
      "author":product.author
    }

    this.http.put("http://localhost:3000/posts/"+this.id,JSON.stringify(this.productObj),{headers:this.hearders}).toPromise().
  then(
    ()=>{
      this.router.navigate(["/"]);
    }
  )
  }

}
