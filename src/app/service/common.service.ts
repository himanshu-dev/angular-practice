import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class CommonService {
  serverCount = 0;
  newServerAdded = new EventEmitter<string>();

  constructor(private logger: LoggingService) {
    this.newServerAdded.subscribe((message) => {
      this.logger.logInfo('in common service: ' + message);
    });
  }
}
