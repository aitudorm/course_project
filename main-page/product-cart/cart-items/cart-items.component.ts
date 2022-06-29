import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit, DoCheck {

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
