import { Component, NgZone, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { ViewChild,ElementRef } from '@angular/core'
import {FindCurrentUrlService} from "../service/find-current-url.service"


@Component({
  selector: 'app-find-current-user',
  templateUrl: './find-current-user.component.html',
  styleUrls: ['./find-current-user.component.css']
})
export class FindCurrentUserComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  user: User;
  auth2 : any;

  tempUser : User;
  constructor(
    private authenticate : AuthenticateService,
    private router: Router,
    private findCurrentUrlService : FindCurrentUrlService,
    private _ngZone: NgZone, private _router: Router

    ) {
    this.user = new User();

  }

  defaultLogin() {
    this.authenticate.authenticate(this.user)

  }

  ngOnInit(): void {
    if(localStorage.getItem('id') != null){
      this.router.navigate(['/']);
    }
    this.googleInitialize();
  }

  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '609669188297-4li6jv3kc9f9du14edqo8f3ul5mdau31.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);

        //this.Name =  profile.getName();
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        console.log('g name ' + profile.getGivenName());
        console.log('f name ' + profile.getFamilyName());

        this.user.firstName = profile.getGivenName();
        this.user.lastName = profile.getFamilyName();
        this.user.email = profile.getEmail();
        this.user.password = "asdbc" + profile.getEmail() + "123aaaabbcc666";
        this.findCurrentUrlService.save(this.user).subscribe(async result => {
          this.tempUser = result;
          if (result == null) {
            console.log("я его не нашел и создал");
            this.findCurrentUrlService.register(this.user);
            await delay(300);
            this.authenticate.authenticate(this.user);
          } else {
            console.log(this.tempUser.email);
             this.authenticate.authenticate(this.user);
         }

        });



      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
