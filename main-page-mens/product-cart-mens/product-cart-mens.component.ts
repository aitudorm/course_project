import { Component, DoCheck, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/message.service';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-cart-mens',
  templateUrl: './product-cart-mens.component.html',
  styleUrls: ['./product-cart-mens.component.css']
})
export class ProductCartMensComponent implements OnInit, DoCheck {

  cartItems = [];

  cartItemNames = [];

  cartQty: number;

  cartTotalStorage: number;

  storagePrikolTotal = 0;

  cartTotal: number;

  temp = 0;



  constructor(private msg: MessengerService,
            private cartService : CartService
) {

  }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })

  }

  ngDoCheck() {
    this.cartTotalStorage = +localStorage.getItem('cartPrice');
    this.cartTotal = +localStorage.getItem('cartQt');
  }

  async addProductToCart(product: Product) {

    this.cartService.postProduct(product);
    await delay(300);

    // this.cartTotal = this.cartTotal + 1;
    // localStorage.setItem('cartQt', this.cartTotal.toString());

    // this.cartTotalStorage = this.cartTotalStorage + +product.price;
    // localStorage.setItem('cartPrice', this.cartTotalStorage.toString());

    this.cartTotal = +localStorage.getItem('cartQt');
    this.cartTotalStorage = +localStorage.getItem('cartPrice');

  }
  isUserLoggedIn() {
    console.log(localStorage.getItem('id'))
    if (localStorage.getItem('id') != null) return true;
    return false;
  }

  isAdminLoggedIn() {
    if(localStorage.getItem('id') == '25') return true;
    return false;
  }


}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}





