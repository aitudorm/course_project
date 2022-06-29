import { Injectable } from '@angular/core';
import { FindCurrentUrlService } from '../service/find-current-url.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { CartService} from 'src/app/service/cart.service';
import { Component, NgZone } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private findCurrentUrl: FindCurrentUrlService,
    private router: Router,
    private ngZone: NgZone,
    private cartService : CartService,
  ) {

  }

  authenticate(user : User) {
    this.findCurrentUrl.save(user).subscribe(async result => {
      user = result;
      if(result == null) {
        alert("Incorrect email or password!")
      } else {
        alert("Hello, " + user.firstName + " " + user.lastName + "!");
        localStorage.setItem('id', user.id);
        localStorage.setItem('email', user.email);
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
        // localStorage.setItem('cartQt', this.cartService.getQt(localStorage.getItem('id')).toString());
        // await delay(300);
        // localStorage.setItem('cartPrice', this.cartService.getPrice(localStorage.getItem('id')).toString());
        this.cartService.getQt(localStorage.getItem('id'));
        this.cartService.getPrice(localStorage.getItem('id'));
        this.ngZone.run( () => {
        this.router.navigate(['/'])
        }
        )
      }
    });

  }

  isUserLoggedIn() {
    let user = localStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('cartQt');
    localStorage.removeItem('cartPrice');
  }

}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
