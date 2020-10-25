export interface Post {
  isActive: boolean;
  id: string;
  post: string;
  userId: string;
  username: string;
  userPhotoId: string;
  postImageId: string;
  isAdmin: boolean;
  profession: string;
  createdDate: string;
}

export interface FriendRequest {
  id: string;
  userId: string;
  friendId: string;
  status: string;
  createdDate: string;
}

export type Friend = 'Friend';
export type Not_A_Friend = 'Not a friend';
export type Pending = 'Pending';
