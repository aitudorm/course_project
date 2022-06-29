import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import {ProductRetrieve} from '../productRetrieve';
@Injectable({
  providedIn: 'root'
})
export class ProductRetrieveService {
  private uploadUrl: string;
  private uploadUrlMens: string;
  private uploadUrlWomens: string;
  private uploadUrlAccess: string;

constructor(private http: HttpClient) {
  this.uploadUrl = 'http://localhost:8080/products/getAll';
  this.uploadUrlMens = 'http://localhost:8080/products/getAll/m';
  this.uploadUrlWomens = 'http://localhost:8080/products/getAll/f';
  this.uploadUrlAccess = 'http://localhost:8080/products/getAll/accessories';
}

public retrieve() {
  return this.http.get<ProductRetrieve[]>(this.uploadUrl);
  }

public retrieveMens() {
  return this.http.get<ProductRetrieve[]>(this.uploadUrlMens);
 }

public retrieveWomens() {
  return this.http.get<ProductRetrieve[]>(this.uploadUrlWomens);
 }
 public retrieveAccess() {
  return this.http.get<ProductRetrieve[]>(this.uploadUrlAccess);
 }

}
