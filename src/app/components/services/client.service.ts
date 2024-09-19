import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel } from '../model/interface/roles';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  // Correct method for getting all employees
  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_Method.GET_ALL_EMP);
  }

  getAllClientProject(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_Method.GET_ALL_CLIENT_PROJECT);
  }

  // Correct method for getting all clients
  getAllClient(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_Method.GET_ALL_CLIENT);
  }

  // Correct method for adding or updating a client
  addUpdate(clientObj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddOrUpdateClient", clientObj);
  }

  // Method to delete clients
  deleteClientByClientId(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId" + id);
  }

  addUpdateCilentProject(clientObj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", clientObj);
  }
}
