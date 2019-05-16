import {Component, OnInit} from '@angular/core';
import * as _ from 'underscore';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  servers = [];
  searchString: any;

  constructor(private authService: AuthService) {
  }

  addNewServer(serverData) {
    const server = {
      name: serverData.name,
      status: serverData.status
    };
    this.servers.push(serverData);
  }

  deleteServer(i: number) {
    this.servers = this.servers.filter(server => {
      return this.servers[i] !== server;
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
