import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.scss']
})
export class AaaComponent implements OnInit {
  age = 0;
  ages = [1, 2, 3, 4, 5, 27, 45];
  user: User = {
    name: 'Lu',
    age: 53
  };

  users: User[] = [
    { name: 'Lu', age: 53 },
    { name: 'Loki', age: 123 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

interface User {
  name: string;
  age: number;
}
