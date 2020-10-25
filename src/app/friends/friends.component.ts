import { Component, OnInit } from '@angular/core';
import { FriendRequest } from 'src/assets/types';
import { users } from '../../assets/friend-requests-fixture';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  friends: FriendRequest[];

  constructor() {}

  ngOnInit(): void {
    this.friends = users.filter((user) => user.status === 'Friend');
  }
}
