export type UserDataSignIn = {
  login: string;
  password: string;
};

export type UserDataSignUp = {
  first_name: string;
  last_name: string;
  login: string;
  email: string;
  password: string;
  confirmation: string;
};

export interface UserData {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  drugs?: Array<string>;
  avatar?: string;
}

export interface UserDataEdit {
  first_name?: string | undefined;
  last_name?: string | undefined;
  email?: string | undefined;
}
