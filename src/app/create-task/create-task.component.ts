import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskName: string = '';
  task: string = "a";
  constructor(private _taskDataService: TaskDataService) { }

  ngOnInit(): void {
  }
  addTask = () => {
    if (this.taskName == '') {
      alert("Enter task")
    } else {
      this._taskDataService.toDo?.push({
        TaskName: this.taskName,
        isCompleted: false
      });
      this.taskName = ''
    }
  };

}
