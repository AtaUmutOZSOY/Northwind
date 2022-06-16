import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../models/content';
import { ListResponseModel } from '../models/responseModels/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string="https://localhost:44338/api/Contents"
  getContents():Observable<ListResponseModel<Content>>{

    let newPath = this.apiUrl +  "/GetAll"
    return this.httpClient.get<ListResponseModel<Content>>(newPath)
  }
}
