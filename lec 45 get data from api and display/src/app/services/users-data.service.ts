import { Injectable } from '@angular/core';
import {HttpClient,provideHttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
}
