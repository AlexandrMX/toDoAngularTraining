import { Component, OnInit } from '@angular/core';
import {Todo} from '../shared/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  todo:Todo = new Todo('Learn Angular 7')

}
