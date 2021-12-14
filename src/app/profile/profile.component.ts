import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  first_name: String;
  last_name: String;
  constructor() {}

  ngOnInit() {
    this.first_name = 'John';
    this.last_name = 'Smith';
  }
}
