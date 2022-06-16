import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/responseModels/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:44338/api/Categories/'
  constructor(private httpClient:HttpClient) { }

  getAllCategoryNames():Observable<ListResponseModel<Category>>{
    let newPath = this.apiUrl + 'GetCategoryNames';
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}
