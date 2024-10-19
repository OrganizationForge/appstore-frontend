import { User } from "../models/user";
import { Errors } from "./auth.interfaces";

export type AuthState = {
  loggedIn: boolean;
  data: User;
  loginData: any;
  errors: Errors;
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
  loginData: {},
  errors: {}
};
