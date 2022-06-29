import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cart-items-access',
  templateUrl: './cart-items-access.component.html',
  styleUrls: ['./cart-items-access.component.css']
})
export class CartItemsAccessComponent implements OnInit, DoCheck {

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
