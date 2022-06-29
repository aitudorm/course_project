import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  private uploadUrl: string;


  constructor(private http: HttpClient) {
    this.uploadUrl = 'http://localhost:8080/products/uploadProduct';
  }

  public upload(product: any) {
    this.http.post(this.uploadUrl, product).subscribe(result => {
     console.log(result);
    });
  }
}
