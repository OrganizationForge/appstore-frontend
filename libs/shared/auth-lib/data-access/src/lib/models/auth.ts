
export interface NewUserRequest {
  user: NewUser;
}

export interface NewUser {
  nombre: string;
  apellido : string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

