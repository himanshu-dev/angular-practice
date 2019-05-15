import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoggingService} from '../../service/logging.service';
import {CommonService} from '../../service/common.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-number-play',
  templateUrl: './number-play.component.html',
  styleUrls: ['./number-play.component.less'],
  // providers: [LoggingService]
})
export class NumberPlayComponent implements OnInit, OnDestroy {
  isOddsVisible = false;
  numbers = [1, 2, 3, 4, 5, 6, 7];

  odds = this.numbers.filter(n => n % 2 !== 0);
  evens = this.numbers.filter(n => n % 2 === 0);

  constructor(private logger: LoggingService,
              private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute) {
    this.commonService.newServerAdded.subscribe((message) => {
      this.logger.logInfo('add server: ', message);
      this.logger.logInfo('number player: got it');
    });
  }

  ngOnInit() {
    // this.logger.logInfo('number play init');
  }

  goToServers() {
    this.router.navigate(
      ['/'],
      {
        relativeTo: this.route,
        queryParams: {allowEdit: 1},
        fragment: 'third'
      },
    );
  }

  ngOnDestroy(): void {
    this.logger.logInfo('number player: destroyed');
  }
}
