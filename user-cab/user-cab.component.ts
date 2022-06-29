import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { CartProductRetrieve } from '../cartProductRetrieve';
import { cartProduct } from '../cartProduct';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-cab',
  templateUrl: './user-cab.component.html',
  styleUrls: ['./user-cab.component.css']
})
export class UserCabComponent implements OnInit {

  productListRetrieve: CartProductRetrieve[];

  productList : cartProduct[] = [];

  userId = localStorage.getItem('id');

  url = 'http://localhost:8080/cart/getById';

  constructor(
    private http: HttpClient,
    private sanitizer:DomSanitizer,
    private router: Router
  ) { }

  formData : FormData;



  ngOnInit(): void {
    this.recentRetrieve();
    if(localStorage.getItem('id') == null){
      this.router.navigate(['/']);
    }
  }



    async recentRetrieve() {
      this.formData = new FormData();
     this.formData.append("userId", localStorage.getItem("id"));
     this.http.post<CartProductRetrieve[]>(this.url, this.formData).subscribe(result => {
      this.productListRetrieve = result});
      await delay(300);

    this.productListRetrieve.pop();
    this.productListRetrieve.forEach(element => {
      let product: cartProduct = new cartProduct();
      product.id = element.id;
      product.name = element.name;
      product.type = element.type;
      product.gender = element.gender;
      product.price = element.price;

      product.image = this.sanitizer.bypassSecurityTrustResourceUrl(element.image);
      console.log(product.image);
      const imageBlob = this.dataURItoBlob(element.image);
      product.image = new File([imageBlob], product.id + product.name, { type: 'image/png' });
      this.productList.push(product)
    })

    }





  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpg' });
    return blob;
 }



}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
