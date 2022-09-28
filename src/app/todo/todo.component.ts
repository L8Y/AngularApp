import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/todo';
import { FormsModule } from '@angular/forms';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TaskDataService]
})
export class TodoComponent implements OnInit {

  task?: ToDo[];
  constructor(private _taskDataService: TaskDataService) {
    this.task = _taskDataService.getTask();
  }

  ngOnInit(): void {
    this.task = this._taskDataService.getTask()
  };

  removeTask = (id: number) => {
    this._taskDataService.toDo?.splice(id, 1);
  };

  toggle = (id: number) => {
    this._taskDataService.toDo?.map((todo, index) => {
      if (index == id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    })
  }
}