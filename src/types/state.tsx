import { UserData } from "./user";

export interface AppState {
  isLogged: boolean;
  userData: UserData;
}
