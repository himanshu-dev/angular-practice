import {Component, OnInit} from '@angular/core';
import {ApiCallerService} from '../../service/api-caller.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  newTask: string;
  taskList = [];

  constructor(private apiCaller: ApiCallerService) {
  }

  ngOnInit() {
  }

  addTask() {
    this.taskList.push(this.newTask);
  }

  saveTasks() {
    this.apiCaller.saveTasks(this.taskList)
      .subscribe((response) => {
        console.log('response', response);
      }, (err) => {
        console.log('err', err);
      });
  }

  getTasks() {
    this.apiCaller.getTasks()
      .subscribe(async (response: Response) => {
        this.taskList = await response.json();
        console.log('response', this.taskList);
      }, (err) => {
        console.log('err', err);
      });
  }
}
