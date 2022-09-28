import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/model/todo';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  constructor(private obj: HttpClient) {

  }
  toDo?: ToDo[];

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
