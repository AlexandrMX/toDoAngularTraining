import { Component } from '@angular/core';

class Todo {
  constructor(public title: string,
              public completed: boolean = false) {}
}

const todos: Todo[] = [
  {
    title: "learn JS",
    completed: true
  },
  {
    title: "learn Angular",
    completed: false
  },
  {
    title: "learn TS",
    completed: false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'to-do-training';
  todos: Todo[] = todos;
  newTodoTitle: string = "";

  create() {
    let todo: Todo = new Todo(this.newTodoTitle);
    this.todos.push(todo);
    this.newTodoTitle = '';
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;

  }

  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }

  }
}
