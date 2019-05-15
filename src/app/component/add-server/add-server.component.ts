import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import * as _ from 'underscore';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html'
})
export class AddServerComponent {
  @Output()
  onServerAdded = new EventEmitter<{ name: string, status: string }>();
  server = {
    name: '',
    status: ''
  };
  serverAdded = false;
  @ViewChild('ServerNameInputElement') ServerNameInputElement: ElementRef;

  constructor(private commonService: CommonService) {
  }

  onServerNameUpdated(event: any) {
    this.serverAdded = false;
    // this.server.name = event.target.value;
    this.server.name = this.ServerNameInputElement.nativeElement.value;
  }

  addNewServer() {
    this.serverAdded = true;
    this.onServerAdded.emit(this.server);
    this.commonService.serverCount += 1;
    this.commonService.newServerAdded.emit('hey, i just added new server!');
  }
}
