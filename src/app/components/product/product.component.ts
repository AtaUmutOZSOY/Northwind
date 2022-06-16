import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service'


// import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productss: Product[] =[ ];
  dataLoaded = false;
  
  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
    console.log('Init Çalıştı');
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{

      this.productss = response.data;
      this.dataLoaded = true
    })   
  }

  
}
