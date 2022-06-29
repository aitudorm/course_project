import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { cartProduct } from 'src/app/cartProduct';
import { HttpClient} from '@angular/common/http';
import { UserCabComponent } from 'src/app/user-cab/user-cab.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-cab-items',
  templateUrl: './user-cab-items.component.html',
  styleUrls: ['./user-cab-items.component.css']
})
export class UserCabItemsComponent implements OnInit {

  @Input() productItem: cartProduct;

  url = 'http://localhost:8080/cart/delete';

  formData: FormData;

  constructor(
    private http: HttpClient,
    private userCab: UserCabComponent,
    private router: Router
  ) { }


  ngOnInit():void {

  }



  async deleteCartItem() {
    this.formData = new FormData();
    this.formData.append("cartId", this.productItem.cartId);
    this.http.post<any>(this.url, this.formData).subscribe(result => {
      console.log(result.response);
    });
    await delay(300);
    window.location.reload();
  }

  deleteCartItemYouTube() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_system');
  }


}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

