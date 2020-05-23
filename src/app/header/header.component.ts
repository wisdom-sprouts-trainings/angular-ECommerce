import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Category } from '../category.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productServi :ProductServices,private http:HttpClient) { }
 
  category : Category[];
  ngOnInit(): void {
    this.http.get<{[key:string]:Product}>("http://localhost:3006/api/categories")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;

           
    })).subscribe(category =>{
        //console.log("category "+category);
        this.category = category;
       //this.products = posts;
     })
   
    ;

  }

}
