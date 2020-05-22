import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  products : Product[];
 
  constructor(private productServi :ProductServices) { }

  ngOnInit(): void {
    
    this.products = this.productServi.getProduct();
   
  }

}
