import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})


export class FindCurrentUrlService {
  private usersUrl: string;
  private registerUrl: string;


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/login';
    this.registerUrl = 'http://localhost:8080/register';
  }


  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }


  public register(user: User) {
    return this.http.post(this.registerUrl, user).subscribe();
  }

}
