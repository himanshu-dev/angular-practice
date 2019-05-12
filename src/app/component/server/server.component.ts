import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {LoggingService} from '../../service/Logging.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    .offline {
      color: yellow;
    }
  `],
  providers: [LoggingService]
})
export class ServerComponent
  implements OnInit, DoCheck, OnChanges,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  server = {
    name: '',
    status: ''
  };

  constructor(private logger: LoggingService) {
  }

  getServerStatus() {
    const r = Math.random();
    this.server.status = r > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.server.status === 'online' ? 'green' : 'red';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('simple changes');
    this.logger.logInfo('server: simple changes');
  }

  ngOnInit(): void {
    this.getServerStatus();
    this.logger.logInfo('server: init');
  }

  ngDoCheck() {
    this.logger.logInfo('server: do check');
  }

  ngAfterContentInit(): void {
    this.logger.logInfo('server: ng after content init');
  }

  ngAfterContentChecked(): void {
    this.logger.logInfo('server: after content checked');
  }

  ngAfterViewInit(): void {
    this.logger.logInfo('server: after view init');
  }

  ngAfterViewChecked(): void {
    this.logger.logInfo('server: after view checked');
  }

  ngOnDestroy(): void {
    this.logger.logInfo('server: destroyed');
  }
}
