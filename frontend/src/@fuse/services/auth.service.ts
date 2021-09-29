import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { MeService } from './me.service';

import { AuthData } from '../../app/models/auth-data';
import { User } from '../../app/models/user';
import {SignupData} from "../../app/models/signup-data";

@Injectable()
export class AuthService {

  constructor(private api: ApiService, private me: MeService) { }

  rememberToken(token): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  canAutoLogin(): boolean {
    return this.getToken() !== null;
  }

  isAuthenticated(): boolean {
    return this.me.token !== null;
  }

  autoLogin(): Promise<User> {
    const token = this.getToken();
    if (token === null) {
      return Promise.reject({error: 'New user'});
    }
    this.me.setToken(token);
    return this.api.me.get().promise()
    .then((resp) => {
      this.me.setUser(resp.data);
      return resp.data;
    });
  }

  login(auth: AuthData): Promise<User> {
    return this.api.authToken.post(auth).promise()
      .then(token => {
        this.me.setToken(token.access);
        this.rememberToken(token.access);
      })
      .then(() => this.api.me.get().promise())
      .then((resp) => {
        this.me.setUser(resp.data);
        return resp.data;
      });
  }

  signup(auth: SignupData): Promise<User> {
    return this.api.signup.post(auth).promise()
      .then(resp => {
          return resp.data;
      });
  }

  logout(): void {
    this.me.forget();
    localStorage.removeItem('token');
  }

}
