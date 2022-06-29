import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { AuthenticateService } from '../service/authenticate.service';
import {FindCurrentUrlService} from '../service/find-current-url.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: FindCurrentUrlService,
    private authenticate : AuthenticateService
  ) {
    this.user = new User();

   }



   onSubmit() {
     // tslint:disable-next-line: deprecation
     this.userService.register(this.user);
     this.authenticate.authenticate(this.user)
   }



  ngOnInit(): void {
    if(localStorage.getItem('id') != null){
      this.router.navigate(['/']);
    }
  }

}
