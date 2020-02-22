import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo-item/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  showDone = true;
  todos: Todo[] = [
    {name: 'Item 1', done: false},
    {name: 'Item 2', done: true},
    {name: 'Item 3', done: false}
  ];

  constructor() {
    this.todos.forEach(todo => console.log(todo));
  }

  ngOnInit(): void {
  }

  toggleShowDone() {
    this.showDone = !this.showDone;
  }
}
