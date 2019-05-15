import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  constructor(private logger: LoggingService) {
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.isLoggedIn);
      }, 500);
    });
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
