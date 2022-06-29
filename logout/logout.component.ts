import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticate : AuthenticateService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.authenticate.logOut();
    this.router.navigate(['/'])
  }

}
