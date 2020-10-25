import { Component, OnInit } from '@angular/core';
import { FriendRequest } from 'src/assets/types';
import { users } from '../../assets/friend-requests-fixture';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {
  users: FriendRequest[];

  constructor() {}

  ngOnInit(): void {
    this.users = users;
  }
}
