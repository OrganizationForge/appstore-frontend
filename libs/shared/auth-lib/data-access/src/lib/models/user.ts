export interface User {
  userName: string;
  email: string;
  jwToken: string;
  // bio: string;
  // image: string;
}

export interface UserResponse {
  user: User;
}
