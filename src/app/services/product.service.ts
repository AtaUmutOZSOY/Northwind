import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/responseModels/ListResponseModel';


@Injectable({
  providedIn: 'root'
})


export class ProductService {
  apiUrl = 'https://localhost:44338/api/Products/';

  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>> {
    
    return this.httpClient
      .get<ListResponseModel<Product>>(this.apiUrl + 'GetAllProducts');
      
  }
}
