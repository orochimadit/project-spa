import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const baseURL = 'https://images.zapps.co.id/predict';
@Injectable({
  providedIn: 'root'
})
export class MachineLearningService {

  constructor(private httpClient: HttpClient) { }

  create(data:any): Observable<any>{
    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
    }
    return this.httpClient.post(baseURL,data,HttpUploadOptions);
  }
}
