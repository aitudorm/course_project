import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';
import { FindCurrentUserComponent } from '../find-current-user/find-current-user.component'
import { User } from '../user'


@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  user : User;
  firstName : string;
  lastName : string;

  constructor(
    public loginservice: AuthenticateService,
    public findcurrent: FindCurrentUserComponent,
  ) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    this.firstName = localStorage.getItem("firstName");
    this.lastName = localStorage.getItem("lastName");
  }


}
