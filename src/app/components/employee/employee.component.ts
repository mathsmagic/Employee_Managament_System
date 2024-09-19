// src/app/components/employee/employee.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/class/employee';
import { EmployeeService } from '../services/employee.service';
import { APIResponseModel } from '../model/interface/roles';
import { AlertComponent } from "../../reusablecomponent/alert/alert.component";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeObj: Employee = new Employee();
  employeeList: Employee[] = [];

  employeeService = inject(EmployeeService);

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }

  onSaveEmployee() {
    if (this.employeeObj.employeeId === 0) {
      this.employeeService.createNewEmployee(this.employeeObj).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Employee created successfully");
          this.loadEmployees();
          this.employeeObj = new Employee();
        } else {
          alert(res.message);
        }
      });
    } else {
      this.employeeService.updateEmployee(this.employeeObj).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Employee updated successfully");
          this.loadEmployees();
          this.employeeObj = new Employee();
        } else {
          alert(res.message);
        }
      });
    }
  }

  onEdit(employee: Employee) {
    this.employeeObj = { ...employee }; // Create a copy of the selected employee
  }

  onDelete(employeeId: number) {
    const isDelete = confirm("Are you sure to delete this employee?");
    if (isDelete) {
      // Implement delete logic here
    }
  }
}
