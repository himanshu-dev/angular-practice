import {Component} from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.less'],
  providers: [CommonService]
})
export class RootComponent {
  name = 'practice-app';
}
