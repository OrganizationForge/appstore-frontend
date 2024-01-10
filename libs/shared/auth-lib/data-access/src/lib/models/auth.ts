export interface NewUserRequest {
  user: NewUser;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
