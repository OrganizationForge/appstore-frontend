export interface User {
  userName: string;
  nombre: string;
  apellido: string;
  email: string;
  jwToken: string;
  isVerified: boolean;
  roles: string[];
  urlImage: string;
}

export interface UserResponse {
  user: User;
}
