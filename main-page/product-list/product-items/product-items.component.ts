import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { MessengerService } from 'src/app/service/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  @Input() productItem: Product;

  storageImageName: any;

  storageId: any;


  constructor(private msg: MessengerService,
    private router : Router) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }

  GoToViewDetail() {
    //TODO router navigate
    localStorage.setItem('storageName', this.productItem.name);
    localStorage.setItem('storagePrice', this.productItem.price);
    this.storageImageName = this.productItem.image;
    localStorage.setItem('storageImage', this.storageImageName);
    localStorage.setItem('storageType', this.productItem.type);
    localStorage.setItem('storageGender', this.productItem.gender);
    this.storageId = this.productItem.id;
    localStorage.setItem('storageId', this.storageId);

    this.router.navigate(['/view-detail']);

  }


}
