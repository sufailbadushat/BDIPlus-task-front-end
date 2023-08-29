import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllData=()=>{
    return this.http.get('http://localhost:8080/api/task/all-tasks');
  }

  CreateTask=(data:any)=>{
    return this.http.post('http://localhost:8080/api/task/create', data);
  }

  getTaskById(id: number) {
    return this.http.get(`http://localhost:8080/api/task/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/task/delete/${id}`);
  }
}
