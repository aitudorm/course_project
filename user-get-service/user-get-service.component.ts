import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/user';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-get-service',
  templateUrl: './user-get-service.component.html',
  styleUrls: ['./user-get-service.component.css']
})
export class UserGetServiceComponent implements OnInit {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users/getAll';
  }

  ngOnInit() {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


}
