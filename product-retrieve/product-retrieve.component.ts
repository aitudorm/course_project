import { Component, OnInit } from '@angular/core';
import {ProductRetrieveService} from '../service/product-retrieve.service';
import { Product } from '../product';
import {ProductRetrieve} from '../productRetrieve';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-product-retrieve',
  templateUrl: './product-retrieve.component.html',
  styleUrls: ['./product-retrieve.component.css']
})
export class ProductRetrieveComponent implements OnInit {

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
    private sanitizer:DomSanitizer) {

   }

  async ngOnInit() {
    this.productRetrieveService.retrieve().subscribe(
      result => {
        this.productListRetrieve = result;
      }
    );
    await delay(300);
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
}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
