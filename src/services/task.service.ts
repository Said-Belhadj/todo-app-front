import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:8081/api/v1/tasks/get/all/tasks';

  getAllTasks() {
    return this.http.get<Task[]>(this.url);
  }
}
