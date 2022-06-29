import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Injectable()
export class CartService {

constructor(private http: HttpClient) {
  this.formData = new FormData();

}
qt : Number;
price : Number;
  formData : FormData;
  postProduct(product : Product) {
    this.formData = new FormData();
    this.formData.append("userId", localStorage.getItem("id"));
    this.formData.append("productId", product.id.toString());
    this.http.post<any>("http://localhost:8080/cart/postToCart", this.formData).subscribe(result => {
      console.log(result);

         localStorage.setItem('cartPrice', result.totalPrice);
         localStorage.setItem('cartQt', result.totalQ);
        // this.getQt(localStorage.getItem('id'));
        // this.getPrice(localStorage.getItem('id'));
     });
  }

  //TODO getProductName ???

  getQt(userId : string) {

    this.http.get<any>("http://localhost:8080/cart/getAmountOfElementsInCart/" + userId).subscribe(result => {
      console.log(result.qt);
      localStorage.setItem('cartQt', result.qt);
  })
  return this.qt;
  }
  getPrice(userId : string) {
    this.http.get<any>("http://localhost:8080/cart/getTotalCartPrice/" + userId).subscribe(result => {
      console.log(result.price);
      localStorage.setItem('cartPrice', result.price);
  })

  }


}
