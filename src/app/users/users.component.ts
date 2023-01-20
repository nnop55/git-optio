import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  roles: any[] = [];


  displayedColumns: string[] = ['Email', 'Firstname', 'Lastname', 'Roles', 'Status', 'Delete'];
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        Email: "tornike@gmail.com",
        Firstname: "Tornike",
        Lastname: "Melikishvili",
        Roles: "Admin",
        Status: "Active",
        Delete: 'ri-delete-bin-line'
      },
    ]
  }

  onFormSubmit(form: NgForm) {
    console.log(form.value)
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.roles.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: any): void {
    const index = this.roles.indexOf(item);

    if (index >= 0) {
      this.roles.splice(index, 1);
    }
  }




}
