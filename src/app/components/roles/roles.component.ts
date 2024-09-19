import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../model/interface/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  // constructor(private http: HttpClient) { //old method

  // }

  //new method
  rolelist: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles()
  }
  getAllRoles() {
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) => {
      this.rolelist = res.data;
    })
  }
}
