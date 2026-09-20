import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser = null;

  constructor() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.loggedInUser = JSON.parse(userStr);
    }
  }

  login(name: string, phone: string) {
    const user = { name, phone };
    this.loggedInUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }

  getUser() {
    return this.loggedInUser;
  }

  isLoggedIn() {
    return !!this.loggedInUser;
  }
}
