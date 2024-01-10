import { User } from "./models/user";

export type AuthState = {
  loggedIn: boolean;
  data: User;
};

export const initialUserValue: User = {
  userName: '',
  email: '',
  jwToken: '',
  // bio: '',
  // image: '',
};

export const authInitialState: AuthState = {
  loggedIn: false,
  data: initialUserValue,
};
