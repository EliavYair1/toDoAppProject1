import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'eliav yair';
  title = 'Check Out';
  todoList = [];
  todoItem = '';
  /*   dueDate = [
    new Date().getDate() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' +
      new Date().getFullYear(),
  ]; */
  dateTime = new Date();
  addItem() {
    this.todoList.push(this.todoItem);
  }
  deleteItem(index) {
    this.todoList.splice(index, 1);
  }
}
