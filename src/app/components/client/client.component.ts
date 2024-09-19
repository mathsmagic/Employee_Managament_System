import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../model/class/client';
import { ClientService } from '../services/client.service';
import { APIResponseModel } from '../model/interface/roles';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from "../../reusablecomponent/alert/alert.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AlertComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
projectList() {
throw new Error('Method not implemented.');
}

  currentDate: Date = new Date();

  clientObj: Client = new Client();
  clientList: Client[] = [];

  ClientService = inject(ClientService);
  $index: any;
  item: any;
  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.ClientService.getAllClient().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    debugger;
    this.ClientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("clien created successfully")
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm("Are u sure to delete client")

    if (isDelete) {
      this.ClientService.deleteClientByClientId(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client Deleted Successfully")
          this.loadClient();
        } else {
          alert(res.message)
        }
      })
    }
  }
}


