import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username = ''
  constructor(private http: HttpClient,private tokenService:TokenService) { }

  login(obj: { username: any; password: any; }): Observable<any> {
    return this.http.post('http://localhost:8080/api/login',{username: obj.username,password: obj.password})
  }
  updateUser(obj: { name: any; phoneNumber: any; email: any; age: any; gender: any; dateOfBirth: any; avatar: any; address: any; }):Observable<any> {
    return this.http.post('http://localhost:8080/api/update',{username: this.tokenService.getUsername(),
      name: obj.name,phoneNumber: obj.phoneNumber,email: obj.email,age: obj.age,gender: obj.gender,
      dateOfBirth: obj.dateOfBirth,avatar: obj.avatar,address: obj.address})
  }
  register(obj: { username: any; name: any; email: any; password: any; confirmPassword: any; roles: any; }):Observable<any> {
    return this.http.post('http://localhost:8080/api/signup',{username: obj.username,name: obj.name,email:obj.email,password:obj.password,confirmPassword: obj.confirmPassword,roles: [obj.roles]});
  }
  changePassword(obj: { password: any; newPassword: any; confirmPassword: any; }):Observable<any> {
    return this.http.post('http://localhost:8080/api/change-password',{username: this.tokenService.getUsername(),password: obj.password,newPassword:obj.newPassword,confirmPassword:obj.confirmPassword})
  }

  profile(username: string):Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/profile/'+username);
  }
}
