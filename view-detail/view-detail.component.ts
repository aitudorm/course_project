import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { MessengerService } from 'src/app/service/message.service';
import { ProductItemsComponent } from 'src/app/main-page/product-list/product-items/product-items.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  productName: string;

  productPrice: string;

  productImage: any;

  productType: string;

  product: Product;

  productId: number;



  constructor(
    private router: Router,
    private msg: MessengerService
   ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productImage = localStorage.getItem('storageImage');
    this.productName = localStorage.getItem('storageName');
    this.productPrice = localStorage.getItem('storagePrice');
    this.productId = +localStorage.getItem('storageId');
    this.productType = localStorage.getItem('storageType');

  }

  GoBack() {
    this.router.navigate(['/']);
  }


  handleAddToCart() {
    this.product.id = this.productId;
    this.product.price = localStorage.getItem('storagePrice');
    this.product.image = localStorage.getItem('storageImage');
    this.product.type = localStorage.getItem('storageType');
    this.product.gender = localStorage.getItem('storageGender');
    this.product.name = localStorage.getItem('storageName');
    console.log(this.product.id);
    this.msg.sendMsg(this.product);
    this.router.navigate(['/']);
  }

}
