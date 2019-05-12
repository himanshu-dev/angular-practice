import {Component, OnInit} from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  servers = [];
  addNewServer(serverData) {
    const server = {
      name: serverData.name,
      status: serverData.status
    };
    this.servers.push(server);
  }

  deleteServer(i: number) {
    this.servers = this.servers.filter(server => {
      return this.servers[i] !== server;
    });
  }
}
