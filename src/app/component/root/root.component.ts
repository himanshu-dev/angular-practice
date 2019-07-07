import {Component} from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styles: [`
    h4 {
      
    }
  `],
  providers: [CommonService]
})
export class RootComponent {
  name = 'practice-app';
}
