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
import {LoggingService} from '../../service/logging.service';
import {ActivatedRoute, Params} from '@angular/router';
import * as _ from 'underscore';
import {Subscription} from 'rxjs';

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
  // providers: [LoggingService]
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
  paramsSubscription: Subscription;

  constructor(private logger: LoggingService,
              private route: ActivatedRoute) {
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
    this.logger.logInfo('server: init');
    this.getServerStatus();

    if (!_.isEmpty(this.route.snapshot.params)) {
      // this.server.name = this.route.snapshot.params['name'];
      // this.server.status = this.route.snapshot.params['status'];

      this.paramsSubscription = this.route.params.subscribe((params) => {
        this.updateServer(params);
      });
    }
  }

  updateServer(params: Params) {
    this.server.name = params.name;
    this.server.status = params.status;
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
    // this.paramsSubscription.unsubscribe();
  }
}
