import { Component, OnInit } from '@angular/core';
import { FriendRequest } from 'src/assets/types';
import { users } from '../../assets/friend-requests-fixture';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
})
export class NetworkComponent implements OnInit {
  requests: FriendRequest[];

  constructor() {}

  ngOnInit(): void {
    this.requests = users.filter((user) => user.status !== 'Friend');
  }
}
