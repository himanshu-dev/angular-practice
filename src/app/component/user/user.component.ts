import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  isLoggedIn = false;
  user: { name: string };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
