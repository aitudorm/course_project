import { Component, OnInit } from '@angular/core';
import { ProductRetrieveService } from 'src/app/service/product-retrieve.service';
import { Product } from 'src/app/product';
import {ProductRetrieve} from 'src/app/productRetrieve';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list-mens',
  templateUrl: './product-list-mens.component.html',
  styleUrls: ['./product-list-mens.component.css']
})
export class ProductListMensComponent implements OnInit {

  productListRetrieve : ProductRetrieve[];
  //private productRetrieveService : ProductRetrieveService;
  productList : Product[] = [];


  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private productRetrieveService : ProductRetrieveService,
    private sanitizer:DomSanitizer) { }

    async ngOnInit() {
      this.productRetrieveService.retrieveMens().subscribe(
        result => {
          this.productListRetrieve = result;
        }
      );
      await delay(300);
       console.log(this.productListRetrieve.length);

      this.productListRetrieve.pop();
      this.productListRetrieve.forEach(element => {

            let product : Product = new Product();
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
            localStorage.setItem('productName', element.name);
            localStorage.setItem('productPrice', element.price);
          });
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

     sort(event: any) {
      switch (event.target.value) {
        case "Low":
          {
            this.productListRetrieve = this.productListRetrieve.sort((low, high) => +low.price - +high.price);
            break;
          }

        case "High":
          {
            this.productListRetrieve = this.productListRetrieve.sort((low, high) => +high.price - +low.price);
            break;
          }

        case "Name":
          {
            this.productListRetrieve = this.productListRetrieve.sort(function (low, high) {
              if (low.name < high.name) {
                return -1;
              }
              else if (low.name > high.name) {
                return 1;
              }
              else {
                return 0;
              }
            })
            break;
          }

        default: {
          this.productListRetrieve = this.productListRetrieve.sort((low, high) => +low.price - +high.price);
          break;
        }

      }
      return this.productListRetrieve;

    }


}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}





