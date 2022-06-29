import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/user';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/register';
  }


 



}
