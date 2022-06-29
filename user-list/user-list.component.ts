import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserGetServiceComponent } from 'src/app/user-get-service/user-get-service.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserGetServiceComponent, private router: Router) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    if(localStorage.getItem('id') != '25'){
      alert('You are not admin!');
      this.router.navigate(['/']);
    }
  }

}
