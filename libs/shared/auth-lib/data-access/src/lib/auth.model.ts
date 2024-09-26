import { User } from "./models/user";

export type AuthState = {
  loggedIn: boolean;
  data: User;
};

export const initialUserValue: User = {
  userName: '',
  nombre: '',
  apellido: '',
  email: '',
  jwToken: '',
  isVerified: false,
  roles: [],
  urlImage: '',
};

export const authInitialState: AuthState = {
  loggedIn: false,
  data: initialUserValue,
};
