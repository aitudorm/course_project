import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cart-items-mens',
  templateUrl: './cart-items-mens.component.html',
  styleUrls: ['./cart-items-mens.component.css']
})
export class CartItemsMensComponent implements OnInit, DoCheck {

  @Input() cartItem: any;

  cartQty:number;

  cartItemNames = [];

  cartItemName: string;

  constructor() { }

  ngOnInit(): void {
  }


  ngDoCheck(): void {
    this.cartItemNames = JSON.parse(localStorage.getItem('cartItems'));
  }


}




