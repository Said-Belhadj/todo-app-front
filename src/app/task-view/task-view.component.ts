import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../entities/task";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService:TaskService) {
  }

  ngOnInit(): void {
    this.showTasks()
  }

  showTasks() : void {
    // @ts-ignore
    this.taskService.getAllTasks().subscribe((data) => this.tasks = data);
  }

}
