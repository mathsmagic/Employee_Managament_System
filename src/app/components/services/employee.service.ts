import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/roles';
import { Employee } from '../model/class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/ClientStrive';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  private url = this.proxyUrl + this.apiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`${this.url}/GetAllEmployee`);
  }

  getEmployeeById(employeeId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`${this.apiUrl}/GetEmployeeByEmployeeId?employeeId=${employeeId}`);
  }

  createNewEmployee(employee: Employee): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`${this.apiUrl}/CreateNewEmployee`, employee);
  }

  updateEmployee(employee: Employee): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(`${this.apiUrl}/UpdateEmployee`, employee);
  }
}
