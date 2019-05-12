import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html'
})
export class AddServerComponent {
  @Output()
  onServerAdded = new EventEmitter<{name: string, status: string}>();
  server = {
    name: '',
    status: ''
  };
  serverAdded = false;
  @ViewChild('ServerNameInputElement') ServerNameInputElement: ElementRef;

  onServerNameUpdated(event: any) {
    this.serverAdded = false;
    this.server.name = event.target.value;
  }

  addNewServer() {
    this.serverAdded = true;
    console.log('server name', this.ServerNameInputElement.nativeElement.value);
    this.onServerAdded.emit(this.server);
  }
}
