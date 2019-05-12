import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../../service/Logging.service';

@Component({
  selector: 'app-number-play',
  templateUrl: './number-play.component.html',
  styleUrls: ['./number-play.component.less'],
  providers: [LoggingService]
})
export class NumberPlayComponent implements OnInit {
  isOddsVisible = false;
  numbers = [1, 2, 3, 4, 5, 6, 7];

  odds = this.numbers.filter(n => n % 2 !== 0);
  evens = this.numbers.filter(n => n % 2 === 0);

  constructor(private logger: LoggingService) {
  }

  ngOnInit() {
    this.logger.logInfo('number play init');
  }

}
