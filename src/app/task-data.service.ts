import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/model/todo';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  toDo?: ToDo[];
  constructor(private obj: HttpClient) {
    this.toDo = [
      {
        TaskName: "hi",
        isCompleted: false
      },
      {
        TaskName: "click me",
        isCompleted: true
      }
    ]
  }

  getApp(): string {
    return "Hello world";
  }
  getTask() {
    return this.toDo
  }

  getdata() {
    return this.obj.get("https://api.quotable.io/random");
  }

}
