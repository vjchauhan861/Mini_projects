import { Component, OnInit } from '@angular/core';

export interface User {
  length: number;
  breadth: number;
  height: number;
  actualWeight: number;
  volumetricWeight: number;
}

@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.scss']
})
export class EmsComponent implements OnInit {
  users: User[] = [];
  userList:any[]=[];
  index: any;
  newUser: any;
  numberOfRowsToGenerate: any;
  constructor() {}

  ngOnInit() {
    this.users = [];
  
  }
  

  onInputChange(index: number) {
    // console.log(`Input changed for user at index ${index}`);
    // console.log(this.users[index]); // Access the user object at the specified index
  }
  addUser(index: any, user: any) {
    // Remove the existing user with the same id
    this.userList = this.userList.filter((u) => u.id !== index);
  
    // Add the new user with the same id
    const newUser = {
      id: index,
      details: user
    };
  
    this.userList.push(newUser);
    console.log(this.userList);
  }
  
  deleteUser(index: number) {
    // Remove the user with the specified index from the 'users' array
    this.users.splice(index, 1);
  
    // Find and remove the user with the same 'id' from the 'userList' array
    this.userList = this.userList.filter((user) => user.id !== index);
  }
  
  generateRow(event: any){
    console.log('event',event);
  }
  generateRows() {
    for (let i = 0; i < this.numberOfRowsToGenerate; i++) {
      // Create a new instance of the User object with default values
      const newUser: any = {
        length: 0,
        breadth: 0,
        height: 0,
        actualWeight: 0,
        volumetricWeight: 0
      };
  
      // Push the new user to the users array
      this.users.push(newUser);
      console.log(newUser);
    }
  }
  
  }
  
  
 
